import React from "react";
import MaterialTable from "material-table";
import "./Rating.css";

class Rating extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
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
              title: "Đánh Giá",
              field: "description",
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
              title: "Điểm",
              field: "star",
              type: "numeric",
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
              name: "Thiên Thảo",
              description: "Dịch vụ rất tốt, bác sĩ thân thiện",
              star: "5"
            },
            {
              name: "Phong Hà",
              description: "Được cụa ló",
              star: "5"
            },
            {
              name: "Nam Per",
              description:
                "Dù đã đặt nhưng vẫn phải chờ khá lâu, dịch vụ thì ok",
              star: "3"
            },
            {
              name: "Lê Bảo",
              description: "Bác sĩ mạnh tay em đau quáaa",
              star: "4"
            },
            {
              name: "Vũ Anh",
              description: "Cũng đc.",
              star: "4"
            },
            {
              name: "Quách Tuấn",
              description: "Bác sĩ mặt hầm hầm, chán",
              star: "1"
            }
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
          title="Khách hàng đánh giá"
        />
      </div>
    );
  }
}

export default Rating;
