import React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import "./Services.css";

class Services extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          components={{
            Toolbar: props => (
              <div>
                <MTableToolbar {...props} />
                <div>
                  <button className="services-btn">Thêm</button>
                </div>
              </div>
            )
          }}
          columns={[
            {
              title: "Tên",
              field: "name",
              cellStyle: {
                textAlign: "left",
                fontFamily: "montserrat",
                fontSize: "16px"
              },
              headerStyle: {
                textAlign: "left",
                fontFamily: "montserrat",
                fontSize: "20px"
              }
            },
            {
              title: "Giá dịch vụ",
              field: "price",
              type: "numeric",
              cellStyle: {
                textAlign: "right",
                fontFamily: "montserrat",
                fontSize: "16px"
              },
              headerStyle: {
                textAlign: "right",
                fontFamily: "montserrat",
                fontSize: "20px"
              }
            },
            {
              title: "Đang Giảm",
              field: "discount",
              cellStyle: {
                textAlign: "right",
                fontFamily: "montserrat",
                fontSize: "16px"
              },
              headerStyle: {
                textAlign: "right",
                fontFamily: "montserrat",
                fontSize: "20px"
              }
            },
            {
              title: "Khung giờ cụ thể",
              field: "discountTime",
              cellStyle: {
                textAlign: "center",
                fontFamily: "montserrat",
                fontSize: "16px"
              },
              headerStyle: {
                textAlign: "center",
                fontFamily: "montserrat",
                fontSize: "20px"
              }
            }
          ]}
          data={[
            {
              name: "Trám răng",
              price: "300.000",
              discount: "5%",
              discountTime: "12h-15h"
            },
            {
              name: "Khám tổng quát",
              price: "200.000",
              discount: "0%",
              discountTime: "10h-13h"
            },
            { name: "Nhổ răng", price: "100.000", discount: "5%" },
            { name: "Chỉnh nha Implant", price: "25.000.000", discount: "5%" },
            {
              name: "Chỉnh nha mặt trong",
              price: "100.000.000",
              discount: "5%"
            },
            {
              name: "Trám răng",
              price: "300.000",
              discount: "5%",
              discountTime: "12h-15h"
            },
            {
              name: "Khám tổng quát",
              price: "200.000",
              discount: "0%",
              discountTime: "10h-13h"
            },
            { name: "Nhổ răng", price: "100.000", discount: "5%" },
            { name: "Chỉnh nha Implant", price: "25.000.000", discount: "5%" },
            {
              name: "Chỉnh nha mặt trong",
              price: "100.000.000",
              discount: "5%"
            }
          ]}
          actions={[
            {
              icon: "edit",
              tooltip: "Chỉnh Sửa",
              fontFamily: "montserrat"
            },
            rowData => ({
              icon: "delete",
              tooltip: "Xóa",
              fontFamily: "montserrat"
            })
          ]}
          localization={{
            header: { actions: "" },
            toolbar: { searchPlaceholder: "Tìm" },
            pagination: { labelRowsSelect: "" }
          }}
          options={{
            actionsColumnIndex: -1,
            headerStyle: {
              fontFamily: "montserrat",
              fontSize: "20px"
            }
          }}
          title="Dịch Vụ Đang Có"
        />
      </div>
    );
  }
}

export default Services;
