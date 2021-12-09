import Axios from 'axios'; 

export default class API {

  static async getList(callback) {
    await Axios.get('http://localhost:8080')
                .then(resp => {
                    console.log(resp);
                  callback(resp.data, false);
                })
                //.catch(error => callback(false, error));
                .catch((error) => {
                  if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                  } else if (error.request) {
                      console.log(error.request);
                  } else {
                      console.log('Error', error.message);
                  }
                  console.log(error.config);
                  //message.error('Bir hata oluştu lütfen tekrar deneyiniz');
              });
  }

  static async create(params,callback) {
    await Axios.post('http://localhost:8080',params)
                .then(resp => {
                  callback(resp.data, false);
                })
                //.catch(error => callback(false, error));
                .catch((error) => {
                  if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                  } else if (error.request) {
                      console.log(error.request);
                  } else {
                      console.log('Error', error.message);
                  }
                  console.log(error.config);
                  //message.error('Bir hata oluştu lütfen tekrar deneyiniz');
              });
  }

}