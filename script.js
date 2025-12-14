const BOT_TOKEN = "8547070631:AAHTelacoZo4u0po3iiwxkNM0BvD1wbNCys";
const CHAT_ID = "7549405923";function order(product, btn, price){
  let box = btn.parentElement;
  let name = box.querySelector(".name").value;
  let phone = box.querySelector(".phone").value;
  let id = box.querySelector(".id").value;
  let receiptFile = box.querySelector(".receipt").files[0];

  if(name=="" || phone=="" || id.length!=6){
    alert("အချက်အလက် ပြည့်စုံအောင်ဖြည့်ပါ");
    return;
  }

  let msg = `
🛒 New Order
📦 Product: ${product}
👤 Name: ${name}
📞 Phone: ${phone}
🆔 ID: ${id}
`;

  // Telegram ပို့
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg
    })
  }).then(()=>{
    // Receipt file ပို့ရန်
    if(receiptFile){
      let formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("photo", receiptFile);

      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method:"POST",
        body: formData
      }).then(()=>{
        alert("Order + Receipt တင်ပြီး ✅");
        btn.disabled = true;
      });
    } else {
      alert("Order တင်ပြီး ✅");
      btn.disabled = true;
    }
  });
}
function order(product, btn){
  let box = btn.parentElement;
  let name = box.querySelector(".name").value;
  let phone = box.querySelector(".phone").value;
  let id = box.querySelector(".id").value;

  if(name=="" || phone=="" || id.length!=6){
    alert("အချက်အလက် ပြည့်စုံအောင်ဖြည့်ပါ");
    return;
  }

  let msg = `
🛒 New Order
📦 Product: ${product}
👤 Name: ${name}
📞 Phone: ${phone}
🆔 ID: ${id}
`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg
    })
  }).then(()=>{
    alert("Order တင်ပြီးပါပြီ ✅");
    btn.disabled = true;
  });
}
// Receipt တင်မှ Order ဖွင့်ပေး
document.querySelectorAll(".receipt").forEach(input => {
  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      input.parentElement.querySelector("button").disabled = false;
    }
  });
});
function order(product, btn){
  let box = btn.parentElement;
  let name = box.querySelector(".name").value;
  let phone = box.querySelector(".phone").value;
  let id = box.querySelector(".id").value;

  if(name=="" || phone=="" || id.length!=6){
    alert("အချက်အလက် ပြည့်စုံအောင်ဖြည့်ပါ");
    return;
  }

  let msg = `
🛒 New Order
📦 Product: ${product}
👤 Name: ${name}
📞 Phone: ${phone}
🆔 ID: ${id}
`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg
    })
  }).then(()=>{
    alert("Order တင်ပြီးပါပြီ ✅");
    btn.disabled = true;
  });
}
