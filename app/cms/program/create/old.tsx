<Form
  form={form}
  name="validateOnly"
  layout="vertical"
  onFinish={handleSubmit}
  className="mt-4"
  id="form"
>
  <Form.Item
    label="Upload Thumbnail"
    valuePropName="fileList"
    rules={[
      {
        required: true,
        message: "Field ini harus diisi",
      },
    ]}
    getValueFromEvent={normFile}
  >
    <Upload action="/upload.do" multiple={false} listType="picture-card">
      <button style={{ border: 0, background: "none" }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
    </Upload>
  </Form.Item>
  <Form.Item
    name="name"
    label="Nama Program"
    rules={[
      {
        required: true,
        message: "Field ini harus diisi",
      },
    ]}
  >
    <Input placeholder="Nama" size="large" />
  </Form.Item>
  <Form.Item
    name="email"
    label="Target Nominal"
    rules={[
      {
        required: true,
        message: "Field ini harus diisi",
      },
    ]}
  >
    <InputNumber
      placeholder="Email"
      size="large"
      type="number"
      className="w-full"
      addonBefore={"Rp"}
      min={1}
      formatter={(value) => currencyFormat(value as number)}
      parser={(value): any => value?.replace(/\$\s?|(,*)/g, "")}
    />
  </Form.Item>
  <Form.Item name="target_donation" label="Tanggal Target Donasi Terkumpul">
    <Input
      disabled={isTargetDateDonation as boolean}
      placeholder="Nama"
      size="large"
      type="date"
    />
    <Checkbox
      className="mt-4"
      checked={isTargetDateDonation as boolean}
      onClick={() => {
        form.setFieldValue("target_donation", "");
        // form.set
        setIsTargetDateDonation((p) => !p);
      }}
    >
      Jangan tentukan tanggal target
    </Checkbox>
  </Form.Item>

  <Form.Item name="description" label="Deskripsi">
    <TextArea size="large" />
  </Form.Item>
</Form>;
