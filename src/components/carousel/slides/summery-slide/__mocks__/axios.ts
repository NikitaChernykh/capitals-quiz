const axios = jest.fn(() => {
    return Promise.resolve({
      status: "Success!"
    });
  })
  
  export default axios;
