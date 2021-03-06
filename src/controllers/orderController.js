const { ErrorCase, SuccessCase } = require('../Helpers/helpers');
const {
  getOrdersDb,
  deleteOrderDb,
  addOrderDb,
  addClientJuridinisDb,
  addClientFizinisDb,
} = require('../models/orderModel');

async function getOrders(req, res) {
  const data = await getOrdersDb();
  if (data === false) {
    ErrorCase(res);
    return;
  }
  if (!data.length) {
    return ErrorCase(res, 'No any orders yet');
  }
  SuccessCase(res, data);
}
async function deleteOrder(req, res) {
  const orderId = req.body.id;
  const data = await deleteOrderDb(orderId);
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
async function addOrder(req, res) {
  const {
    juridinis,
    amount,
    amount_total_EUR,
    product_id,
    product_name,
    send_to,
    email,
  } = req.body;
  const data = await addOrderDb(
    juridinis,
    amount,
    amount_total_EUR,
    product_id,
    product_name,
    send_to,
    email
  );
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
async function addClientFizinis(req, res) {
  const { name, surname, adresas, miestas, el_pastas, tel } = req.body;
  const data = await addClientFizinisDb(
    name,
    surname,
    adresas,
    miestas,
    el_pastas,
    tel
  );
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
async function addClientJuridinis(req, res) {
  const {
    imones_kodas,
    pvm_kodas,
    imones_pav,
    adresas,
    miestas,
    el_pastas,
    tel,
  } = req.body;
  const data = await addClientJuridinisDb(
    imones_kodas,
    pvm_kodas,
    imones_pav,
    adresas,
    miestas,
    el_pastas,
    tel
  );
  if (data === false) {
    ErrorCase(res);
    return;
  }
  SuccessCase(res, data);
}
module.exports = {
  getOrders,
  deleteOrder,
  addOrder,
  addClientFizinis,
  addClientJuridinis,
};
