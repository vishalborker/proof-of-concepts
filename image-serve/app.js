const express = require('express');
const fs = require('fs');

const util = require('./util');

const app = express();

const PORT = process.env.PORT || 9000;

app.get('/base64/:data', function(req, res) {
	const data = req.params.data;

	console.log('data', data);
	const convertedData = util.normal64(data);
	console.log('convertedData', convertedData);

	const imageBuffer = new Buffer(convertedData, 'base64');
	fs.writeFileSync('converted.jpg', imageBuffer);
    res.send(imageBuffer);
});

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`);
});


// http://0.0.0.0:9000/base64/R0lGODlhPQBEAPeoAJosM__AwO_AwHVYZ_z595kzAP_s7P-goOXMv8-fhw_v739_f-8PD98fH_8mJl-fn_9ZWb8_PzWlwv___6wWGbImAPgTEMImIN9gUFCEm_gDALULDN8PAD6atYdCTX9gUNKlj8wZAKUsAOzZz-UMAOsJAP_Z2ccMDA8PD_95eX5NWvsJCOVNQPtfX_8zM8-QePLl38MGBr8JCP-zs9myn_8GBqwpAP_GxgwJCPny78lzYLgjAJ8vAP9fX_-MjMUcAN8zM_9wcM8ZGcATEL-QePdZWf_29uc_P9cmJu9MTDImIN-_r7-_vz8_P8VNQGNugV8AAF9fX8swMNgTAFlDOICAgPNSUnNWSMQ5MBAQEJE3QPIGAM9AQMqGcG9vb6MhJsEdGM8vLx8fH98AANIWAMuQeL8fABkTEPPQ0OM5OSYdGFl5jo-Pj_-pqcsTE78wMFNGQLYmID4dGPvd3UBAQJmTkP-8vH9QUK-vr8ZWSHpzcJMmILdwcLOGcHRQUHxwcK9PT9DQ0O_v70w5MLypoG8wKOuwsP_g4P_Q0IcwKEswKMl8aJ9fX2xjdOtGRs_Pz-Dg4GImIP8gIH0sKEAwKKmTiKZ8aB_f39Wsl-LFt8dgUE9PT5x5aHBwcP-AgP-WltdgYMyZfyywz78AAAAAAAD___8AAP9mZv___wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKgALAAAAAA9AEQAAAj_AFEJHEiwoMGDCBMqXMiwocAbBww4nEhxoYkUpzJGrMixogkfGUNqlNixJEIDB0SqHGmyJSojM1bKZOmyop0gM3Oe2liTISKMOoPy7GnwY9CjIYcSRYm0aVKSLmE6nfq05QycVLPuhDrxBlCtYJUqNAq2bNWEBj6ZXRuyxZyDRtqwnXvkhACDV-euTeJm1Ki7A73qNWtFiF-_gA95Gly2CJLDhwEHMOUAAuOpLYDEgBxZ4GRTlC1fDnpkM-fOqD6DDj1aZpITp0dtGCDhr-fVuCu3zlg49ijaokTZTo27uG7Gjn2P-hI8-PDPERoUB318bWbfAJ5sUNFcuGRTYUqV_3ogfXp1rWlMc6awJjiAAd2fm4ogXjz56aypOoIde4OE5u_F9x199dlXnnGiHZWEYbGpsAEA3QXYnHwEFliKAgswgJ8LPeiUXGwedCAKABACCN-EA1pYIIYaFlcDhytd51sGAJbo3onOpajiihlO92KHGaUXGwWjUBChjSPiWJuOO_LYIm4v1tXfE6J4gCSJEZ7YgRYUNrkji9P55sF_ogxw5ZkSqIDaZBV6aSGYq_lGZplndkckZ98xoICbTcIJGQAZcNmdmUc210hs35nCyJ58fgmIKX5RQGOZowxaZwYA-JaoKQwswGijBV4C6SiTUmpphMspJx9unX4KaimjDv9aaXOEBteBqmuuxgEHoLX6Kqx-yXqqBANsgCtit4FWQAEkrNbpq7HSOmtwag5w57GrmlJBASEU18ADjUYb3ADTinIttsgSB1oJFfA63bduimuqKB1keqwUhoCSK374wbujvOSu4QG6UvxBRydcpKsav--Ca6G8A6Pr1x2kVMyHwsVxUALDq_krnrhPSOzXG1lUTIoffqGR7Goi2MAxbv6O2kEG56I7CSlRsEFKFVyovDJoIRTg7sugNRDGqCJzJgcKE0ywc0ELm6KBCCJo8DIPFeCWNGcyqNFE06ToAfV0HBRgxsvLThHn1oddQMrXj5DyAQgjEHSAJMWZwS3HPxT_QMbabI_iBCliMLEJKX2EEkomBAUCxRi42VDADxyTYDVogV-wSChqmKxEKCDAYFDFj4OmwbY7bDGdBhtrnTQYOigeChUmc1K3QTnAUfEgGFgAWt88hKA6aCRIXhxnQ1yg3BCayK44EWdkUQcBByEQChFXfCB776aQsG0BIlQgQgE8qO26X1h8cEUep8ngRBnOy74E9QgRgEAC8SvOfQkh7FDBDmS43PmGoIiKUUEGkMEC_PJHgxw0xH74yx_3XnaYRJgMB8obxQW6kL9QYEJ0FIFgByfIL7_IQAlvQwEpnAC7DtLNJCKUoO_w45c44GwCXiAFB_OXAATQryUxdN4LfFiwgjCNYg-kYMIEFkCKDs6PKAIJouyGWMS1FSKJOMRB_BoIxYJIUXFUxNwoIkEKPAgCBZSQHQ1A2EWDfDEUVLyADj5AChSIQW6gu10bE_JG2VnCZGfo4R4d0sdQoBAHhPjhIB94v_wRoRKQWGRHgrhGSQJxCS-0pCZbEhAAOw