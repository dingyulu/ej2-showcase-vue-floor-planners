import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';  


// 定义一个通用的API请求函数  
async function request<T = any>(  
    url: string,  
    method: 'get' | 'post' | 'put' | 'delete' = 'get',  
    data?: any,  
    config?: AxiosRequestConfig  
  ): Promise<T> {  
    try {  
      const response: AxiosResponse<T> = await axios({  
        url,  
        method: method.toUpperCase(),  
        data,  
        ...config, // 允许传入额外的axios配置  
      });  
    
      return response.data;  
    } catch (error) {  
      // 这里可以添加一些错误处理逻辑，比如重新尝试请求、记录日志等  
      throw error;  
    }  
  } 