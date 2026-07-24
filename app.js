// 1. الإعدادات الافتراضية للطلب
const defaultData = {
  specs: {
    fabricCode: "TX-992-COTTON",
    color: "كحلي داكن", // Navy Blue
    cut: "أوفر سايز", // Oversized
    shape: "تي شيرت" // T-Shirt
  },
  inventory: {
    totalFabricMeters: 500,
    fabricUsedMeters: 0 
  },
  production: {
    orderTarget: 1000,
    itemsCompleted: 0,
    itemsSold: 0
  }
};

// 2. تحميل البيانات المحفوظة من المتصفح أو استخدام الافتراضية
let factoryData = JSON.parse(localStorage.getItem('factoryData')) || defaultData;

// 3. عرض البيانات على الشاشة
function updateDashboard() {
  document.getElementById('fabric-code').innerText = factoryData.specs.fabricCode;
  document.getElementById('fabric-color').innerText = factoryData.specs.color;
  document.getElementById('cloth-cut').innerText = factoryData.specs.cut;
  document.getElementById('cloth-shape').innerText = factoryData.specs.shape;

  const fabricLeft = factoryData.inventory.totalFabricMeters - factoryData.inventory.fabricUsedMeters;
  
  document.getElementById('fabric-total').innerText = factoryData.inventory.totalFabricMeters + " م";
  document.getElementById('fabric-left').innerText = fabricLeft.toFixed(1) + " م";

  document.getElementById('order-progress').innerText = `${factoryData.production.itemsCompleted} / ${factoryData.production.orderTarget}`;
  document.getElementById('total-sold').innerText = factoryData.production.itemsSold + " قطعة";

  let progressPercentage = (factoryData.production.itemsCompleted / factoryData.production.orderTarget) * 100;
  if (progressPercentage > 100) progressPercentage = 100;
  document.getElementById('progress-bar').style.width = progressPercentage + "%";
}

// 4. حفظ البيانات وتحديث الشاشة
function saveDataAndRender() {
  localStorage.setItem('factoryData', JSON.stringify(factoryData));
  updateDashboard();
}

// 5. الاستماع لعملية إرسال النموذج
document.getElementById('update-form').addEventListener('submit', function(e) {
  e.preventDefault(); 
  
  const addedFabric = parseFloat(document.getElementById('add-fabric').value) || 0;
  const addedCompleted = parseInt(document.getElementById('add-completed').value, 10) || 0;
  const addedSold = parseInt(document.getElementById('add-sold').value, 10) || 0;

  factoryData.inventory.fabricUsedMeters += addedFabric;
  factoryData.production.itemsCompleted += addedCompleted;
  factoryData.production.itemsSold += addedSold;

  document.getElementById('add-fabric').value = '';
  document.getElementById('add-completed').value = '';
  document.getElementById('add-sold').value = '';

  saveDataAndRender();
});

// 6. زر إعادة التعيين
document.getElementById('reset-btn').addEventListener('click', function() {
  if (confirm("هل أنت متأكد أنك تريد إعادة تعيين كل التقدم إلى الصفر؟")) {
    factoryData = JSON.parse(JSON.stringify(defaultData)); 
    saveDataAndRender();
  }
});

// 7. تهيئة التطبيق عند الفتح
updateDashboard();