import axios from "axios";

class service {
    getEmpleados() {
        return axios
          .get('https://private-58f3fc-empleadosgeneric.apiary-mock.com/employees')
          .then(({ data }) => {
            return data.map((item) => {
              return(item);
            });
          });
      }

}
export default service;
