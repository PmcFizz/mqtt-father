import request from '@/utils/request';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}


export interface ClientOperateForm {
  periodMilliseconds: number;
  start: string;
  type: boolean;
  count: number;
}

export interface messageSendType {
  periodMilliseconds: number;
  start: string;
  type: boolean;
  stepMilliseconds: number;
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
export async function testCloseClient(clientId: String) {
  return request('/api/test/close/client', {
    method: 'POST',
    data: {clientId},
  });
}

/**
 * 主动关闭部分或全部客户端(将自动重连)
 * @param message
 */
export async function testDisconnectClients(data: ClientOperateForm) {
  return request('/api/test/disconnect/clients', {
    method: 'POST',
    data,
  });
}

/**
 * 主动增加连接数
 * @param message
 */
export async function testInCreaseClients(data: ClientOperateForm) {
  return request('/api/test/increase/clients', {
    method: 'POST',
    data,
  });
}

/**
 * 模拟消息发送
 * @param message
 */
export async function testMockMsg(data: messageSendType) {
  return request('/api/test/mock/msg', {
    method: 'POST',
    data,
  });
}

/**
 * 重置所有或指定连接数
 * @param message
 */
export async function testResetClients(data: ClientOperateForm) {
  return request('/api/test/reset/clients', {
    method: 'POST',
    data,
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
