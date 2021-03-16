import "./App.css";
import SwuifTable from "./SwuifTable";
import { useState } from "react";
import { Table, Menu, Space, Input, Dropdown } from "antd";

import {
  MoreOutlined,
  EditOutlined,
  FileDoneOutlined,
  DeleteOutlined,
  RocketOutlined,
} from "@ant-design/icons";

function App() {
  const dropdownMenu = (
    <Menu>
      <Menu.Item>
        <EditOutlined />
        Edit
      </Menu.Item>
      <Menu.Item>
        <FileDoneOutlined />
        History
      </Menu.Item>
      <Menu.Item>
        <DeleteOutlined />
        Delete
      </Menu.Item>
      <Menu.Item>
        <RocketOutlined />
        Submit
      </Menu.Item>
    </Menu>
  );

  const [data, setData] = useState([
    ...Array.from({ length: 100 }).map((_, idx) => {
      return {
        key: idx,
        adminTitle: "Johnasdasfasdfasdsadfsafd Brown",
        slug:
          "iouoeoruhfjgkdsnvcaskfjldhaskjldfhjklasdfjhsadfkhjlsadfhkjm,oipegsng23252612",
        mainTitle: "New York No. 1 Lake Park",
        forAllCountries: "asdasdads",
        countries: "indo",
        languageCode: "ID",
        androidDevice: "asdasdasd",
        iosDevice: "apul",
        minAppVer: "1",
        maxAppVer: "1",
        weight: "50",
        createdBy: "john.brown@gmail.com",
      };
    }),
    ...Array.from({ length: 10 }).map((_, idx) => {
      return {
        key: idx,
        adminTitle: "Luchen",
        slug: "ewiudsfhjknm,asduioldsfvcvnbhjueikdl5",
        mainTitle: "New York No. 1 Lake Park",
        forAllCountries: "lkjlkj",
        countries: "japon",
        languageCode: "JP",
        androidDevice: "qwqw",
        iosDevice: "apul",
        minAppVer: "1",
        maxAppVer: "1",
        weight: "100",
        createdBy: "luchenama@g.com",
      };
    }),
    ...Array.from({ length: 10 }).map((_, idx) => {
      return {
        key: idx,
        adminTitle: "Amadeus",
        slug: "sdriuogfhvbjlckmuuwir0eofkl3049",
        mainTitle: "New York No. 1 Lake Park",
        forAllCountries: "bsabsa",
        countries: "uk",
        languageCode: "EN",
        androidDevice: "wewe",
        iosDevice: "apul",
        minAppVer: "1",
        maxAppVer: "1",
        weight: "100",
        createdBy: "amaluchen@mail.com",
      };
    }),
  ]);

  const [columns, setColumns] = useState([
    {
      dataIndex: "adminTitle",
      width: 200,
      headerText: "Admin Title",
      enableLink: true,
      sorter: (a, b) => {
        return a.adminTitle > b.adminTitle ? 1 : -1;
      },
    },
    {
      dataIndex: "slug",
      width: 100,
      headerText: "Slug ID",
      sorter: (a, b) => {
        return a.slug > b.slug ? 1 : -1;
      },
    },
    {
      dataIndex: "mainTitle",
      width: 100,
      headerText: "Main Title",
      sorter: (a, b) => {
        return a.mainTitle > b.mainTitle ? 1 : -1;
      },
    },
    {
      dataIndex: "forAllCountries",
      width: 100,
      headerText: "For All Countries",
      sorter: (a, b) => {
        return a.forAllCountries > b.forAllCountries ? 1 : -1;
      },
    },
    {
      dataIndex: "countries",
      width: 100,
      headerText: "Countries",
      sorter: (a, b) => {
        return a.countries > b.countries ? 1 : -1;
      },
    },
    {
      dataIndex: "languageCode",
      width: 100,
      headerText: "Language Code",
      sorter: (a, b) => {
        return a.languageCode > b.languageCode ? 1 : -1;
      },
    },
    {
      dataIndex: "androidDevice",
      width: 100,
      headerText: "Android Device",
      sorter: (a, b) => {
        return a.androidDevice > b.androidDevice ? 1 : -1;
      },
    },
    {
      dataIndex: "iosDevice",
      width: 100,
      headerText: "iOS Device",
      sorter: (a, b) => {
        return a.iosDevice > b.iosDevice ? 1 : -1;
      },
    },
    {
      dataIndex: "minAppVer",
      width: 100,
      headerText: "Min App Version",
      sorter: (a, b) => {
        return a.minAppVer > b.minAppVer ? 1 : -1;
      },
    },
    {
      dataIndex: "maxAppVer",
      width: 100,
      headerText: "Max App Version",
      sorter: (a, b) => {
        return a.maxAppVer > b.maxAppVer ? 1 : -1;
      },
    },
    {
      dataIndex: "weight",
      width: 100,
      headerText: "Weight",
      sorter: (a, b) => {
        return a.weight > b.weight ? 1 : -1;
      },
    },
    {
      dataIndex: "createdBy",
      width: 100,
      headerText: "Created By",
      sorter: (a, b) => {
        return a.createdBy > b.createdBy ? 1 : -1;
      },
    },
    {
      dataIndex: "actions",
      width: 80,
      headerText: "Action",
      render: (text, record) => (
        <div style={{ textAlign: "center" }}>
          <Space size="middle">
            <Dropdown overlay={dropdownMenu}>
              <a className="ant-dropdown-link" href="#">
                <MoreOutlined />
              </a>
            </Dropdown>
          </Space>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <SwuifTable columns={columns} data={data}></SwuifTable>
    </div>
  );
}

export default App;
