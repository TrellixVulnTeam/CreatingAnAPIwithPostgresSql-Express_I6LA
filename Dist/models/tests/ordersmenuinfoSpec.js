"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordersmenuinfo_1 = require("../ordersmenuinfo");
const customerscredentials_1 = require("../customerscredentials");
const n_productsmenuinfo_1 = require("../n_productsmenuinfo");
const customersmenuinfo_1 = require("../customersmenuinfo");
// To can insert dates into tables
const pd = require('postgres-date');
const cus_cred = (0, customerscredentials_1.customerscredentials)();
const cusinfo = (0, customersmenuinfo_1.customersmenuinfo)();
const prodinfo = (0, n_productsmenuinfo_1.productsmenuinfo)();
const ordinfo = (0, ordersmenuinfo_1.ordersmenuinfo)();
describe('Orders Menu Info  Model', () => {
    // Create new order info
    it('New Order Info Is Created', async () => {
        const cus_1 = await cus_cred.createcustomercredential('eo@gmailcom', 'Eman1y1', 'pre284');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const cr_prod = await prodinfo.createproductinfo(cus_1.id, 'Rice', 30, 'Food', 'Egypt');
        const cr_or = await ordinfo.createorderinfo(cus_1.id, 1, new Date('2022-4-10'), false, cr_cu.id, cr_prod.id);
        expect(cr_or.onlinepayment).toBeFalse;
    });
    // Show order info
    it('Show order Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('we2@gmailcom', 'Eman1b1', 'pre284');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const cr_prod = await prodinfo.createproductinfo(cus_1.id, 'Rice', 30, 'Food', 'Egypt');
        const cr_or = await ordinfo.createorderinfo(cus_1.id, 1, new Date('2022-4-10'), false, cr_cu.id, cr_prod.id);
        const sh_or = ordinfo.showorderinfo(cr_or.id);
        expect(sh_or).toBeDefined();
    });
    // Show all orders info
    it('Show ALL Orders Info', async () => {
        const sha_or = await ordinfo.showallorderinfo();
        expect(sha_or).toBeDefined();
    });
    // Update quantity for order  
    it('Update Order Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('e2ty@gmailcom', 'Eman1qw1', 'pre28re4');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const cr_prod = await prodinfo.createproductinfo(cus_1.id, 'Rice', 30, 'Food', 'Egypt');
        const cr_or = await ordinfo.createorderinfo(cus_1.id, 1, new Date('2022-4-10'), false, cr_cu.id, cr_prod.id);
        const up_or = await ordinfo.updateorderinfo(cr_or.id, cus_1.id, 3);
        expect(Number(up_or.orderquantity)).toBe(3);
    });
    // Delete order info
    it('Delete order Info', async () => {
        const cus_1 = await cus_cred.createcustomercredential('eer2@gmailcom', 'Emanqw11', 'pre2984er');
        const cr_cu = await cusinfo.createcustomerinfo(cus_1.id, 'Eman11', '0124567648', 'alexr-st', 'Egypt', '82346789012343');
        const cr_prod = await prodinfo.createproductinfo(cus_1.id, 'Rice', 30, 'Food', 'Egypt');
        const cr_or = await ordinfo.createorderinfo(cus_1.id, 1, new Date('2022-4-10'), false, cr_cu.id, cr_prod.id);
        const de_or1 = await ordinfo.deleteorderinfo(Number(cr_or.id), cus_1.id);
        expect(de_or1).toBeDefined();
    });
    /*
    // Delete all order info
it('Delete all orders Info',async()=>{

 const cus_1=await cus_cred.createcustomercredential('ee23@gmailcom','Emanq4w11','pre2984e6r');

 const de_or1=await ordinfo.delete_allorderinfo(cus_1.id);
 

 expect(de_or1).toBeDefined();
  })*/
});
//# sourceMappingURL=ordersmenuinfoSpec.js.map