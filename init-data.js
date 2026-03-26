// هذا الملف يساعد في تهيئة قاعدة البيانات الأولية
// يمكنك تشغيله مرة واحدة عند أول استخدام

function initializeData() {
    // المعاملات المالية
    if (!localStorage.getItem('transactions')) {
        const transactions = [
            { id: 1, memberId: 'M001', amount: 5000, description: 'راتب شهر يناير', type: 'monthly', category: 'رواتب', date: '2024-01-01', status: 'confirmed' },
            { id: 2, memberId: 'M002', amount: 2000, description: 'مكافأة إنتاج', type: 'bonus', category: 'مكافآت', date: '2024-01-15', status: 'pending' },
            { id: 3, memberId: 'M001', amount: 1500, description: 'صرف يومي', type: 'daily', category: 'صرف', date: '2024-01-20', status: 'pending' },
            { id: 4, memberId: 'M003', amount: 800, description: 'صرف أسبوعي', type: 'weekly', category: 'صرف', date: '2024-01-22', status: 'pending' }
        ];
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }
    
    // الأعضاء
    if (!localStorage.getItem('members')) {
        const members = [
            { id: 'M001', name: 'أحمد محمد', role: 'employee', joinDate: '2024-01-01' },
            { id: 'M002', name: 'خالد علي', role: 'tailor', joinDate: '2024-01-01' },
            { id: 'M003', name: 'سعيد عبدالله', role: 'employee', joinDate: '2024-01-05' },
            { id: 'ADMIN001', name: 'عبده المدير', role: 'admin', joinDate: '2024-01-01' }
        ];
        localStorage.setItem('members', JSON.stringify(members));
    }
    
    // الإنتاج
    if (!localStorage.getItem('productions')) {
        const productions = [
            { id: 1, memberId: 'M002', productName: 'قميص رجالي', model: 'موديل 101', quantity: 50, price: 150, date: '2024-01-10', status: 'confirmed' },
            { id: 2, memberId: 'M002', productName: 'بنطلون', model: 'موديل 202', quantity: 30, price: null, date: '2024-01-18', status: 'pending' },
            { id: 3, memberId: 'M002', productName: 'جاكيت', model: 'موديل 303', quantity: 15, price: null, date: '2024-01-20', status: 'pending' }
        ];
        localStorage.setItem('productions', JSON.stringify(productions));
    }
    
    // إعدادات التكرار التلقائي
    if (!localStorage.getItem('recurringSettings')) {
        const recurring = [
            { id: 1, memberId: 'M001', description: 'صرف يومي', amount: 100, type: 'daily', category: 'صرف', status: 'active', lastRun: null },
            { id: 2, memberId: 'M002', description: 'مكافأة أسبوعية', amount: 500, type: 'weekly', category: 'مكافآت', status: 'active', lastRun: null }
        ];
        localStorage.setItem('recurringSettings', JSON.stringify(recurring));
    }
    
    // الاعتراضات
    if (!localStorage.getItem('objections')) {
        localStorage.setItem('objections', JSON.stringify([]));
    }
    
    console.log('✅ تم تهيئة قاعدة البيانات بنجاح');
}

// تشغيل التهيئة
initializeData();