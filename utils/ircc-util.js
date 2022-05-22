export const xmlStringGenerator = irccCode => {
    return `
        <s:Envelope 
            xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"
            s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <s:Body>
                <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
                <IRCCCode>${irccCode}</IRCCCode>
                </u:X_SendIRCC>
            </s:Body>
        </s:Envelope>
  `
};
