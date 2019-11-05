import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

/**
 * 广播消息
 * @param message
 */
export async function testBroadcast(message: String) {
  return request('/api/test/broadcast', {
    method: 'POST',
    data: {message},
  });
}

/**
 * 关闭指定客户端
 * @param message
 */
export async function testCloseClient(message: String) {
  return request('/api/test/close/client', {
    method: 'POST',
    data: {message},
  });
}

/**
 * 主动关闭部分或全部客户端(将自动重连)
 * @param message
 */
export async function testDisconnectClients(message: String) {
  return request('/api/test/disconnect/clients', {
    method: 'POST',
    data: {message},
  });
}

/**
 * 主动增加连接数
 * @param message
 */
export async function testInCreaseClients(message: String) {
  return request('/api/test/increase/clients', {
    method: 'POST',
    data: {message},
  });
}

/**
 * 模拟消息发送
 * @param message
 */
export async function testMockMsg(message: String) {
  return request('/api/test/mock/msg', {
    method: 'POST',
    data: {message},
  });
}

/**
 * 重置所有或指定连接数
 * @param message
 */
export async function testResetClients(message: String) {
  return request('/api/test/reset/clients', {
    method: 'POST',
    data: {message},
  });
}

/**
 * 模拟消息发送
 * @param message
 */
export async function adminSendNotify(message: String) {
  return request('/api/admin/send/notify', {
    method: 'GET',
    params: {message},
  });
}

/**
 * 模拟消息发送
 * @param message
 */
export async function adminSessionsByPage(currentPage: Number,pageSize: Number) {
  return request('/api/admin/sessions/ByPage', {
    method: 'GET',
    params: {currentPage,pageSize},
  });
}


export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
