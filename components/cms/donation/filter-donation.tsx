import { Input, Modal, Select } from "antd";
import React from "react";

const FilterDonation: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onCancel={onClose} title="Filter Donasi">
      <div className="space-y-2">
        <div>
          <p>Tanggal</p>
          <div className="flex items-center space-x-2">
            <Input type="date" />
            <span>Sampai</span>
            <Input type="date" />
          </div>
        </div>
        <div>
          <p>Donasi</p>
          <Select
            showSearch
            className="w-full"
            placeholder="Select a person"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
          />
        </div>
      </div>
    </Modal>
  );
};

export default FilterDonation;
