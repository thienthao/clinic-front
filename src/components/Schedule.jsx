import React from "react";
import MaterialTable from "material-table";
import "./Schedule.css";

class Schedule extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            {
              title: "Thời gian",
              field: "time",
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
              title: "Dịch vụ được đặt",
              field: "service",
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
              title: "Tên khách hàng",
              field: "patientName",
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
              title: "Được giảm giá",
              field: "discount",
              cellStyle: {
                textAlign: "center",
                fontFamily: "montserrat",
                fontSize: "16px"
              },
              headerStyle: {
                textAlign: "right",
                fontFamily: "montserrat",
                fontSize: "20px"
              }
            }
          ]}
          data={[
            {
              time: "09:00 Thứ 7 04/04/2020",
              service: "Trám răng",
              patientName: "Thiên Thảo",
              discount: "5%"
            },
            {
              time: "10:30 Thứ 7 04/04/2020",
              service: "Nhổ răng",
              patientName: "Lê Bảo",
              discount: "0%"
            },
            {
              time: "18:30 Thứ 7 04/04/2020",
              service: "Khám tổng quát",
              patientName: "Thế Anh",
              discount: "0%"
            },
            {
              time: "11:30 Chủ Nhật 05/04/2020",
              service: "Trám răng",
              patientName: "Nam Per",
              discount: "5%"
            },
            {
              time: "14:00 Chủ Nhật 05/04/2020",
              service: "Niềng răng implant",
              patientName: "Khá Bảnh",
              discount: "5%"
            },
            {
              time: "17:30 Chủ Nhật 05/04/2020",
              service: "Bọc răng sứ",
              patientName: "Huấn Hồng",
              discount: "10%"
            },
            {
              time: "14:30 Thứ 2 06/04/2020",
              service: "Lấy tủy",
              patientName: "Lionel Messi",
              discount: "0%"
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
          title="Lịch hẹn"
        />
      </div>
    );
  }
}

export default Schedule;
