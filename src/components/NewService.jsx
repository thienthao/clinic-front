import React from "react";
import "./NewService.css";
import "./assests/css/bootstrap.css";
import "./assests/css/style.css";
import "./assests/font-awesome/font-awesome.css";

class NewService extends React.Component {
  render() {
    return (
      <div className="container">
        <section id="main-content">
          <section className="wrapper">
            <h3>
              <i className="fa fa-angle-right"> Thêm dịch vụ</i>
            </h3>

            {/* Form */}
            <div className="row mt">
              <div className="form-panel">
                <form className="form-horizontal style-form">
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Tên dịch vụ
                    </label>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Giá
                    </label>
                    <div className="col-sm-6">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 col-sm-2 control-label">
                      Giá
                    </label>
                    <div className="col-sm-4">
                      <button>Tạo Mới</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default NewService;
