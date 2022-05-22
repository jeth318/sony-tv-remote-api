const { PROTOCOL, HOST } = process.env;
export const baseUrl = `${PROTOCOL}://${HOST}/sony`;
const headers = {
    POST: '/sony/ircc HTTP/1.1',
    Accept: '*/*',
    'Content-Type': 'application/xml; charset=utf-8',
    SOAPACTION: '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
    'X-Auth-PSK': 1234,
}

export const getIrccConfig = data => ({
    url: `${baseUrl}/IRCC`,
    method: 'POST',
    data,
    headers,
});

export const getIsTurnedOnConfig = data => ({
    url: `${baseUrl}/system`,
    headers,
    method: 'POST',
    data: JSON.stringify({
        method: 'getPowerStatus',
        id: 50,
        params: [],
        version: '1.0',
    }),
});
