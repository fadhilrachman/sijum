import { useDeleteNews, useGetNews } from "@/hooks/news.hook";
import { Button, Dropdown, Modal, Spin, Steps } from "antd";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import moment from "moment";
import BaseButton from "@/components/shared/base-button";
import { EllipsisOutlined, MoreOutlined } from "@ant-design/icons";

const NewsProgram = ({ isPublic = false }: { isPublic?: boolean }) => {
  const { program_id } = useParams();
  const { mutateAsync, status } = useDeleteNews();
  const [perPage, setPerPage] = useState(3);
  const { data, isFetching, refetch } = useGetNews({
    page: 1,
    per_page: perPage,
    program_id: program_id as string,
  });

  const handleDeleteNews = async (id: string) => {
    await mutateAsync(id as string);
    Modal.destroyAll();
  };

  const handleTrigerModalDelete = (id: string) => {
    Modal.confirm({
      title: "Hapus Admin",
      content: (
        <div>
          "Apakah anda yakin ingin menghapus Cuy?"
          <div className="space-x-2 mt-2 flex justify-end">
            <BaseButton
              onClick={() => {
                Modal.destroyAll();
              }}
            >
              Kembali
            </BaseButton>
            <BaseButton
              loading={status == "pending"}
              type="primary"
              onClick={() => {
                handleDeleteNews(id);
              }}
            >
              Hapus
            </BaseButton>
          </div>
        </div>
      ),
      footer: false,
    });
  };

  const items = data?.result.map((val) => {
    return {
      title: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">
              {moment(val.date).format("D MMMM YYYY")}
            </h3>
            {!isPublic && (
              <Dropdown
                menu={{
                  items: [
                    {
                      label: <div>Hapus</div>,
                      key: val.id,
                      onClick: (val) => {
                        handleTrigerModalDelete(val.key);
                      },
                    },
                    {
                      label: <div>Edit</div>,
                      key: val.id,
                      // onClick: (val) => {
                      //   handleTrigerModalDelete(val.key);
                      // },
                    },
                  ],
                }}
                trigger={["click"]}
              >
                <Button
                  // variant="text"
                  type="text"
                  size="large"
                  shape="circle"
                  icon={
                    <MoreOutlined className="text-gray-400 !text-2xl font-extrabold" />
                  }
                />
              </Dropdown>
            )}

            {/* <EllipsisOutlined className="text-3xl" /> */}
          </div>

          <img
            className=" rounded-md"
            src={val?.thumbnail?.url}
            // src="https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            alt=""
          />
        </div>
      ),
      description: (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: val.description as string }}
        />
      ),
    };
  });

  useEffect(() => {
    refetch();
  }, [perPage]);

  return (
    <Spin spinning={isFetching}>
      <div className="space-y-4">
        <h4 className="font-semibold">Berita Program</h4>
        {data?.result?.length == 0 ? (
          <p className="text-center !my-6">Belum ada berita</p>
        ) : (
          <Steps direction="vertical" progressDot current={4} items={items} />
        )}

        {(data?.pagination?.total_data as number) > perPage && (
          <div className="w-full justify-center  flex">
            <BaseButton
              type="primary"
              onClick={() => {
                setPerPage((p) => p + 3);
              }}
            >
              More
            </BaseButton>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default NewsProgram;
