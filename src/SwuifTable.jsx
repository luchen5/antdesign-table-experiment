import React, { useState, useEffect } from "react";
import { Table, Input } from "antd";
import { Resizable } from "react-resizable";

const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

export const SwuifTable = ({ data, columns: mapper }) => {
  const [filterData, setFilterData] = useState(data);
  const [searchField, setSearchField] = useState({});

  const columnHeader = (head, key, width) => {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            className="text-ellipsis"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width,
            }}
          >
            {head}
          </div>
        </div>
        <Input
          placeholder={"Search " + head}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            const search = e.target.value;
            setSearchField((prev) => {
              return {
                ...prev,
                [key]: search.toLowerCase(),
              };
            });
          }}
        />
      </div>
    );
  };

  useEffect(() => {
    const tempData = data.filter((data) => {
      const search = Object.entries(searchField).every(([key, value]) => {
        return data[key].toLowerCase().includes(value);
      });
      return search;
    });
    setFilterData(tempData);
  }, [searchField]);

  const defaultRender = (text, enableLink, width) => (
    <div>
      {enableLink ? (
        <a
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width,
            display: "block",
          }}
        >
          {text}
        </a>
      ) : (
        <p
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width,
            display: "block",
          }}
        >
          {text}
        </p>
      )}
    </div>
  );

  const [columns, setColumns] = useState(
    mapper.map((e) => {
      return {
        ...e,
        title:
          e.headerText === "Action"
            ? e.headerText
            : columnHeader(e.headerText, e.dataIndex, e.width),
        key: e.dataIndex,
        render:
          e.headerText === "Action"
            ? e.render
            : (text) => defaultRender(text, e.enableLink, e.width),
      };
    })
  );

  const components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  const handleResize = (index) => (e, { size }) => {
    setColumns((columns) => {
      console.log(columns);
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        title: columnHeader(
          nextColumns[index].headerText,
          nextColumns[index].dataIndex,
          size.width
        ),
        width: size.width,
        render: (text) =>
          defaultRender(text, nextColumns[index].enableLink, size.width),
      };
      return nextColumns;
    });
  };

  const currentColumns = columns.map((col, index) => {
    const temp = { ...col };

    if (temp.headerText !== "Action") {
      temp.onHeaderCell = (column) => ({
        width: column.width,
        onResize: handleResize(index),
      });
    }

    return temp;
  });

  return (
    <div style={{ overflowX: "auto" }} className="App">
      <Table
        bordered
        components={components}
        dataSource={filterData}
        columns={currentColumns}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: ["10", "20", "30", "40"],
        }}
        scroll={{ x: "max-content" }}
      ></Table>
    </div>
  );
};

export default SwuifTable;
