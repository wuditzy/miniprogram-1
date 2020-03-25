export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method:options.method||'get',
      data:options.data||null,
      success:resolve,
      fail:reject
    })
  })
}