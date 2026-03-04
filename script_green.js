        // Sample data for Cau Giay small eateries with real images
        const stores = [
            {
                id: 15,
                name: "Mỳ vằn thắn Bà Nguyên",
                address: "13 Đ. Nguyễn Khang, Yên Hoà, Cầu Giấy, Hà Nội, Vietnam",
                type: "small",
                image: "https://cdn.phunuvagiadinh.vn/ctvseo_thuhien/cach-nau-mi-van-than_1.jpg",
                safetyScore: 90,
                rating: "excellent",
                certified: true,
                certExpiry: "20/01/2026",
                openKitchen: true,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "James Kim", date: "1 ngày trước", rating: 5, text: "Best pho cuon in Hanoi! Super clean kitchen, can see everything. Beef fresh, herbs washed well. Staff change gloves often." },
                    { name: "Mai Anh", date: "5 ngày trước", rating: 5, text: "Thịt bò tươi thái mỏng, rau thơm rửa nhiều lần. Nhìn vào bếp thấy sạch sẽ, dụng cụ inox. Chủ quán rất chu đáo." },
                    { name: "Lâm Tuấn", date: "1 tuần trước", rating: 4, text: "Phở cuốn ngon. Bếp mở nên yên tâm. Chỉ có điều đậu hũ chiên hơi dầu mỡ, nên để ráo kỹ hơn." }
                ],
                reviewCount: 164
            },
            {
                id: 16,
                name: "Tào Phớ Family",
                address: "151 Đ. Nguyễn Ngọc Vũ, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
                type: "small",
                image: "https://static.riviu.co/image/2020/11/08/bf1f46537db8ce8c3fd52cecca5e67e5_output.jpeg",
                safetyScore: 89,
                rating: "good",
                certified: true,
                certExpiry: "30/09/2025",
                openKitchen: false,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "Đinh Hương", date: "5 ngày trước", rating: 4, text: "View đẹp, bánh tôm giòn ngon. Tôm tươi, khoai lang to. Quán nhỏ khá sạch nhưng WC cần vệ sinh tốt hơn." },
                    { name: "Robert Zhang", date: "1 tuần trước", rating: 4, text: "Shrimp fritters crispy and fresh. Small eatery clean but bathroom not well maintained." },
                    { name: "Hoàng Yến", date: "2 tuần trước", rating: 5, text: "Quán lâu năm, đông khách nhưng phục vụ nhanh. Bàn ăn sạch, bát đĩa không bị vỡ mẻ." }
                ],
                reviewCount: 112
            },
            {
                id: 17,
                name: "Chàng Râu - Takoyaki",
                address: "30 Ngõ 33 Phố Phan Văn Trường, Dịch Vọng Hậu, Cầu Giấy, Hà Nội, Vietnam",
                type: "small",
                image: "https://mms.img.susercontent.com/vn-11134513-7r98o-lsvhqavplhhg73@resize_ss640x400!@crop_w640_h400_cT",
                safetyScore: 92,
                rating: "excellent",
                certified: true,
                certExpiry: "15/07/2026",
                openKitchen: true,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "Cao Minh", date: "2 ngày trước", rating: 5, text: "Nước dùng trong vắt, không bị tanh. Tôm, cua tươi ngon. Bếp sạch sẽ, nồi ninh nước dùng có nắp đậy kín." },
                    { name: "Thanh Hà", date: "1 tuần trước", rating: 5, text: "Quán rất sạch, nước luôn sôi liu riu. Rau muống luộc tươi xanh." },
                    { name: "Amanda Lee", date: "10 ngày trước", rating: 4, text: "Delicious crab noodle soup, broth clear and tasty. Clean cooking area." }
                ],
                reviewCount: 134
            },
            {
                id: 18,
                name: "Quán Lòng Hợp Lý 3",
                address: "34 Cầu Giấy, Dịch Vọng, Cầu Giấy, Hà Nội, Vietnam",
                type: "small",
                image: "https://toplist.vn/images/800px/quan-chao-long-hop-ly-768864.jpg",
                safetyScore: 95,
                rating: "excellent",
                certified: true,
                certExpiry: "18/03/2026",
                openKitchen: true,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "Anna Chen", date: "1 ngày trước", rating: 5, text: "Perfect! International standard hygiene. Open kitchen very clean." },
                    { name: "Nguyễn Tuấn", date: "3 ngày trước", rating: 5, text: "Bếp mở rất sạch, nhân viên chỉnh tề." },
                    { name: "Trần Hải", date: "1 tuần trước", rating: 5, text: "Cơm niêu thơm ngon, đồ ăn phong phú." }
                ],
                reviewCount: 201
            },
            {
                id: 19,
                name: "Ita Food Trung Hoà",
                address: "74 P.Trung Hòa, Trung Hoà, Cầu Giấy, Hà Nội, Vietnam",
                type: "small",
                image: "https://topgo.vn/wp-content/uploads/2022/08/ITA-Food-Hanoi-20-768x650.jpg",
                safetyScore: 83,
                rating: "good",
                certified: true,
                certExpiry: "08/06/2025",
                openKitchen: true,
                safeItems: true,
                cleanWater: true,
                staffHealth: false,
                reviews: [
                    { name: "Hà Linh", date: "1 tuần trước", rating: 4, text: "Nem giòn rụm, nhân đầy. Dầu thơm, không bị ngấy. Nhưng bàn ăn hơi dính dầu mỡ, cần lau thường xuyên hơn." },
                    { name: "Quang Dũng", date: "2 tuần trước", rating: 3, text: "Nem ngon nhưng vệ sinh chưa tốt. Thớt dùng lâu, đen xì." },
                    { name: "Monica Liu", date: "3 tuần trước", rating: 4, text: "Crispy spring rolls, fresh filling." }
                ],
                reviewCount: 64
            },
            {
                id: 20,
                name: "Bún Chả Sinh Từ",
                address: "Nhà N04, Tòa UDic Complex, Hoàng Đạo Thúy, P. Trung Hòa, Quận Cầu Giấy, Hà Nội.",
                type: "small",
                image: "https://bunchasinhtu.vn/wp-content/uploads/2021/05/z2056654741100_db72fc2e3119b7dab16c897596a3fd66.jpg",
                safetyScore: 86,
                rating: "good",
                certified: true,
                certExpiry: "14/12/2025",
                openKitchen: true,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "David Park", date: "4 ngày trước", rating: 4, text: "Fresh fish noodles, watched them clean the fish. Preparation area clean." },
                    { name: "Lê Nga", date: "1 tuần trước", rating: 4, text: "Cá rô phi tươi, phi-lê sạch sẽ." },
                    { name: "Đặng Hùng", date: "2 tuần trước", rating: 3, text: "Bún cá ngon nhưng giờ đông quá chật." }
                ],
                reviewCount: 81
            },
            {
                id: 21,
                name: "Xôi Ngọc",
                address: "Số 1A Ngõ 259 Yên Hòa, Cầu Giấy, Hà Nội.",
                type: "small",
                image: "https://toplist.vn/images/800px/xoi-ngoc-980559.jpg",
                safetyScore: 91,
                rating: "excellent",
                certified: true,
                certExpiry: "22/10/2025",
                openKitchen: false,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "Lisa Nguyen", date: "2 ngày trước", rating: 5, text: "Quán ăn rất sạch, dụng cụ rửa kĩ." },
                    { name: "Vũ Tùng", date: "1 tuần trước", rating: 5, text: "Đậu đũa tươi, nước chấm ngon." },
                    { name: "Phương Anh", date: "10 ngày trước", rating: 4, text: "Không gian đẹp, WC cần nâng cấp." }
                ],
                reviewCount: 178
            },
            {
                id: 22,
                name: "Bún Bò Huế Trịnh",
                address: "108C2, Nghĩa Tân, Cầu Giấy, Hà Nội",
                type: "small",
                image: "https://amthucvungmien.com.vn/uploads/images/blog/2022/08/13/bun11-1660353684.jpg",
                safetyScore: 88,
                rating: "good",
                certified: true,
                certExpiry: "16/05/2026",
                openKitchen: true,
                safeItems: true,
                cleanWater: true,
                staffHealth: true,
                reviews: [
                    { name: "Kiều Anh", date: "6 ngày trước", rating: 4, text: "Thịt dê tươi, không hôi. Rau sạch, nhiều loại." },
                    { name: "Trương Hải", date: "2 tuần trước", rating: 4, text: "Lẩu dê ngon, bếp mở nhìn rõ." },
                    { name: "Ryan Chen", date: "3 tuần trước", rating: 5, text: "Fresh ingredients, clean hot pot." }
                ],
                reviewCount: 119
            },
        ];

        let currentFilter = 'all';
        let currentRating = 0;
        let compareList = [];
        let currentView = 'grid';
        let analyticsLogs = [];

        // Initialize page
        function init() {
            displayStores(stores);
            updateStats();
            analyticsLogs = generateFakeTrafficLogs();
            renderAnalytics();
        }

        // Display stores
        function displayStores(storesToShow) {
            const grid = document.getElementById('storesGrid');
            grid.innerHTML = storesToShow.map(store => `
                <div class="store-card ${store.isPending ? 'pending-store' : ''}" onclick="handleCardClick(event, ${store.id})">
                    <input type="checkbox" class="compare-checkbox" onclick="event.stopPropagation(); toggleCompare(${store.id})" 
                           id="compare-${store.id}" title="Thêm vào so sánh" ${store.isPending ? 'disabled' : ''}>
                    <div class="store-image" style="background-image: url('${store.image}')">
                        <div class="store-badge">${getTypeName(store.type)}</div>
                        ${store.isPending ? '<div class="pending-badge">⏳ Đang xác minh</div>' : ''}
                    </div>
                    <div class="store-info">
                        <h3 class="store-name">${store.name}</h3>
                        <div class="store-address">
                            ${store.address}
                        </div>
                        
                        ${store.certified ? 
                            `<div class="certificate-status">
                                ✓ Chứng nhận hợp lệ đến ${store.certExpiry}
                            </div>` : 
                            store.isPending ?
                            `<div class="certificate-status pending">
                                ⏳ Đang chờ xác minh
                            </div>` :
                            `<div class="certificate-status expired">
                                ⚠️ Chưa có chứng nhận
                            </div>`
                        }
                        
                        ${!store.isPending ? `
                        <div class="safety-rating">
                            <div class="rating-circle ${store.rating}">
                                ${store.safetyScore}
                                <div class="rating-text">/ 100</div>
                            </div>
                            <div class="rating-details">
                                <div class="rating-item">
                                    <span class="rating-label">Bếp mở</span>
                                    <span class="rating-badge">${store.openKitchen ? '✓ Có' : '✗ Không'}</span>
                                </div>
                                <div class="rating-item">
                                    <span class="rating-label">Dụng cụ AT</span>
                                    <span class="rating-badge">${store.safeItems ? '✓ Có' : '✗ Không'}</span>
                                </div>
                                <div class="rating-item">
                                    <span class="rating-label">Nước sạch</span>
                                    <span class="rating-badge">${store.cleanWater ? '✓ Có' : '✗ Không'}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="reviews-summary">
                            <span class="review-count">⭐ ${store.reviewCount} đánh giá</span>
                            <a href="#" class="view-details" onclick="event.stopPropagation(); openStoreDetail(${store.id})">Xem chi tiết →</a>
                        </div>
                        ` : `
                        <div class="pending-message">
                            <p style="color: #666; text-align: center; padding: 1rem; font-size: 0.9rem;">
                                Quán này đang chờ xác minh. Chúng tôi sẽ kiểm tra thông tin và cập nhật sớm nhất.
                            </p>
                        </div>
                        `}
                    </div>
                </div>
            `).join('');
        }

        // Get type name in Vietnamese
        function getTypeName(type) {
            const types = {
                street: '🍜 Vỉa hè',
                small: '🏪 Quán nhỏ',
                restaurant: '🍽️ Nhà hàng',
                cafe: '☕ Cà phê'
            };
            return types[type] || types.street;
        }

        // Handle card click
        function handleCardClick(event, storeId) {
            // Don't open modal if clicking on checkbox or links
            if (event.target.type === 'checkbox' || event.target.tagName === 'A') {
                return;
            }
            openStoreDetail(storeId);
        }

        // Search stores
        function searchStores() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            let filtered = stores.filter(store => 
                store.name.toLowerCase().includes(searchTerm) ||
                store.address.toLowerCase().includes(searchTerm)
            );

            // if a filter pill is active, apply it on top of search results
            if (currentFilter && currentFilter !== 'all') {
                if (currentFilter === 'excellent') {
                    filtered = filtered.filter(s => s.safetyScore >= 90);
                } else if (currentFilter === 'certified') {
                    filtered = filtered.filter(s => s.certified);
                } else if (currentFilter === 'open-kitchen') {
                    filtered = filtered.filter(s => s.openKitchen);
                }
            }

            displayStores(filtered);
        }

        // Filter stores
        function filterStores(filter) {
            currentFilter = filter;
            
            // Update active filter pill
            document.querySelectorAll('.filter-pill').forEach(pill => {
                pill.classList.remove('active');
            });
            event.target.classList.add('active');
            
            let filtered = stores;
            
            if (filter === 'excellent') {
                filtered = stores.filter(s => s.safetyScore >= 90);
            } else if (filter === 'certified') {
                filtered = stores.filter(s => s.certified);
            } else if (filter === 'open-kitchen') {
                filtered = stores.filter(s => s.openKitchen);
            }
            
            displayStores(filtered);
        }

        // Open store detail modal
        function openStoreDetail(storeId) {
            const store = stores.find(s => s.id === storeId);
            if (!store) return;
            
            document.getElementById('modalStoreName').textContent = store.name;
            document.getElementById('modalStoreAddress').textContent = store.address;
            
            document.getElementById('modalBody').innerHTML = `
                <div class="detail-section">
                    <h3>🏆 Điểm An Toàn Tổng Thể</h3>
                    <div class="safety-rating">
                        <div class="rating-circle ${store.rating}">
                            ${store.safetyScore}
                            <div class="rating-text">/ 100</div>
                        </div>
                        <div class="rating-details">
                            <p style="color: #666; line-height: 1.6;">
                                Quán này đạt điểm an toàn ${store.safetyScore}/100 dựa trên tiêu chí: 
                                chứng nhận ATTP, vệ sinh bếp, sử dụng dụng cụ an toàn, và đánh giá của khách hàng.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>✅ Kiểm Tra An Toàn</h3>
                    <div class="safety-checklist">
                        <div class="checklist-item">
                            <div class="check-icon ${store.certified ? 'yes' : 'no'}">
                                ${store.certified ? '✓' : '✗'}
                            </div>
                            <div>
                                <strong>Chứng nhận ATTP hợp lệ</strong>
                                <div style="font-size: 0.85rem; color: #666;">
                                    ${store.certified ? `Có hiệu lực đến ${store.certExpiry}` : 'Chưa có chứng nhận'}
                                </div>
                            </div>
                        </div>
                        
                        <div class="checklist-item">
                            <div class="check-icon ${store.openKitchen ? 'yes' : 'no'}">
                                ${store.openKitchen ? '✓' : '✗'}
                            </div>
                            <div>
                                <strong>Bếp mở cho khách quan sát</strong>
                                <div style="font-size: 0.85rem; color: #666;">
                                    ${store.openKitchen ? 'Khách có thể nhìn thấy quy trình chế biến' : 'Bếp không mở'}
                                </div>
                            </div>
                        </div>
                        
                        <div class="checklist-item">
                            <div class="check-icon ${store.safeItems ? 'yes' : 'no'}">
                                ${store.safeItems ? '✓' : '✗'}
                            </div>
                            <div>
                                <strong>Sử dụng dụng cụ an toàn</strong>
                                <div style="font-size: 0.85rem; color: #666;">
                                    ${store.safeItems ? 'Găng tay, khẩu trang, dụng cụ inox' : 'Chưa đạt chuẩn'}
                                </div>
                            </div>
                        </div>
                        
                        <div class="checklist-item">
                            <div class="check-icon ${store.cleanWater ? 'yes' : 'no'}">
                                ${store.cleanWater ? '✓' : '✗'}
                            </div>
                            <div>
                                <strong>Nguồn nước sạch</strong>
                                <div style="font-size: 0.85rem; color: #666;">
                                    ${store.cleanWater ? 'Nước đạt chuẩn vệ sinh' : 'Chưa xác minh'}
                                </div>
                            </div>
                        </div>
                        
                        <div class="checklist-item">
                            <div class="check-icon ${store.staffHealth ? 'yes' : 'no'}">
                                ${store.staffHealth ? '✓' : '✗'}
                            </div>
                            <div>
                                <strong>Giấy khám sức khỏe nhân viên</strong>
                                <div style="font-size: 0.85rem; color: #666;">
                                    ${store.staffHealth ? 'Nhân viên có giấy khám định kỳ' : 'Cần cập nhật'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>💬 Đánh Giá Từ Khách Hàng (${store.reviewCount})</h3>
                    ${store.reviews.map(review => `
                        <div class="review-card">
                            <div class="review-header">
                                <span class="reviewer-name">${review.name}</span>
                                <span class="review-date">${review.date}</span>
                            </div>
                            <div class="review-rating">
                                ${'⭐'.repeat(review.rating)}
                            </div>
                            <div class="review-text">${review.text}</div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            document.getElementById('storeModal').classList.add('active');
        }

        // Close modal
        function closeModal() {
            document.getElementById('storeModal').classList.remove('active');
        }

        // Show section
        function showSection(section) {
            // Hide all sections
            document.getElementById('browse-section').classList.add('hidden');
            document.getElementById('upload-section').classList.add('hidden');
            document.getElementById('review-section').classList.add('hidden');
            document.getElementById('subscription-section').classList.add('hidden');
            document.getElementById('analytics-section').classList.add('hidden');
            
            // Show selected section
            document.getElementById(section + '-section').classList.remove('hidden');
            
            // Update nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
        }

        // Fake premium subscription handler
        function handleSubscription(plan) {
            const label = plan === 'yearly' ? 'Yearly' : 'Monthly';
            alert('Demo only: ' + label + ' subscription selected. No real payment is processed.');
        }

        // Handle upload form
        // Handle upload form
        function handleUpload(e) {
            e.preventDefault();
            
            // Get form reference
            const form = e.target;
            
            // Get form values using name attributes
            const storeName = form.name.value.trim();
            const storeAddress = form.address.value.trim();
            const storePhone = form.phone.value.trim();
            const storeType = form.type.value;
            const storeDescription = form.description ? form.description.value.trim() : '';
            
            // Validate required fields
            if (!storeName || !storeAddress || !storePhone || !storeType) {
                alert('⚠️ Vui lòng điền đầy đủ thông tin bắt buộc!\n\nPlease fill in all required fields!');
                return;
            }
            
            console.log('Creating new store:', storeName); // Debug log
            
            const newStore = {
                id: Date.now(), // Use timestamp for unique ID
                name: storeName,
                address: storeAddress,
                phone: storePhone,
                type: storeType,
                description: storeDescription,
                image: getDefaultImage(storeType),
                safetyScore: 0,
                rating: "pending",
                certified: false,
                certExpiry: "Đang xác minh",
                openKitchen: false,
                safeItems: false,
                cleanWater: false,
                staffHealth: false,
                reviews: [],
                reviewCount: 0,
                isPending: true
            };
            
            console.log('Adding store to array...'); // Debug log
            
            // Add to beginning of stores array
            stores.unshift(newStore);
            
            console.log('Total stores:', stores.length); // Debug log
            
            // Update statistics
            updateStats();
            
            // Reset filter to show all stores
            currentFilter = 'all';
            document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
            document.querySelectorAll('.filter-pill')[0].classList.add('active');
            
            // Refresh display
            displayStores(stores);
            
            console.log('Store added successfully!'); // Debug log
            
            // Show success message
            alert('✅ Đăng ký thành công!\n\n' + 
                  'Quán: ' + newStore.name + '\n' +
                  'Địa chỉ: ' + newStore.address + '\n' +
                  'Loại: ' + getTypeName(newStore.type) + '\n\n' +
                  'Quán của bạn đã được thêm vào hệ thống và đang chờ xác minh.\n\n' +
                  '---\n\n' +
                  '✅ Registration successful!\n\n' +
                  'Restaurant: ' + newStore.name + '\n' +
                  'Address: ' + newStore.address + '\n' +
                  'Type: ' + getTypeName(newStore.type) + '\n\n' +
                  'Your restaurant has been added and is pending verification.');
            
            // Reset form
            form.reset();
            
            // Go back to browse section
            showSection('browse');
            
            // Scroll to top to see new store
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
        
        // Get default image based on store type
        function getDefaultImage(type) {
            const defaultImages = {
                street: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
                small: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                restaurant: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
                cafe: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80'
            };
            return defaultImages[type] || defaultImages.street;
        }

        // Handle review form
        function handleReview(e) {
            e.preventDefault();
            
            const form = e.target;
            const storeName = form.elements[0].value;
            const reviewerName = form.elements[1].value;
            const reviewText = form.elements[5].value; // textarea is at index 5
            
            // Find the store
            const store = stores.find(s => s.name.toLowerCase().includes(storeName.toLowerCase()));
            
            if (!store) {
                alert('❌ Không tìm thấy quán "' + storeName + '". Vui lòng kiểm tra lại tên quán.\n\n❌ Store "' + storeName + '" not found. Please check the name.');
                return;
            }
            
            if (store.isPending) {
                alert('⏳ Quán này đang chờ xác minh. Bạn có thể đánh giá sau khi quán được xác nhận.\n\n⏳ This store is pending verification. You can review after it\'s confirmed.');
                return;
            }
            
            // Create new review
            const newReview = {
                name: reviewerName,
                date: 'Vừa xong',
                rating: currentRating || 5,
                text: reviewText
            };
            
            // Add review to store
            store.reviews.unshift(newReview); // Add to beginning
            store.reviewCount++;
            
            // Update statistics
            updateStats();
            
            // Refresh display
            displayStores(stores);
            
            alert('⭐ Cảm ơn bạn đã đánh giá! Góp ý của bạn giúp cộng đồng có thêm thông tin về an toàn thực phẩm.\n\nThank you for your review! Your feedback helps the community stay informed about food safety.\n\nQuán: ' + store.name);
            
            form.reset();
            currentRating = 0;
            updateStarDisplay();
            showSection('browse');
        }

        // Set rating
        function setRating(rating) {
            currentRating = rating;
            updateStarDisplay();
        }

        // Update star display
        function updateStarDisplay() {
            const stars = document.querySelectorAll('.star-rating');
            stars.forEach((star, index) => {
                star.style.opacity = index < currentRating ? '1' : '0.3';
                star.style.transform = index < currentRating ? 'scale(1.2)' : 'scale(1)';
            });
        }

        // Close modal when clicking outside
        document.getElementById('storeModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Initialize on load
        window.onload = init;

        // Search on Enter key (use keydown for broader browser support)
        document.getElementById('searchInput').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                searchStores();
            }
        });

        // Sort stores
        function sortStores(sortBy) {
            let sorted = [...stores];
            
            switch(sortBy) {
                case 'safety':
                    sorted.sort((a, b) => b.safetyScore - a.safetyScore);
                    break;
                case 'reviews':
                    sorted.sort((a, b) => b.reviewCount - a.reviewCount);
                    break;
                case 'name':
                    sorted.sort((a, b) => a.name.localeCompare(b.name));
                    break;
            }
            
            displayStores(sorted);
        }

        // Toggle view
        function toggleView(view) {
            currentView = view;
            
            // Update buttons
            document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
            event.target.closest('.toggle-btn').classList.add('active');
            
            const grid = document.getElementById('storesGrid');
            grid.classList.remove('hidden');

            if (view === 'list') {
                grid.style.gridTemplateColumns = '1fr';
            } else {
                grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
            }
        }

        // Toggle compare
        function toggleCompare(storeId) {
            const index = compareList.indexOf(storeId);
            
            if (index > -1) {
                compareList.splice(index, 1);
            } else {
                if (compareList.length >= 3) {
                    alert('Bạn chỉ có thể so sánh tối đa 3 quán cùng lúc / You can only compare up to 3 stores at once');
                    document.getElementById(`compare-${storeId}`).checked = false;
                    return;
                }
                compareList.push(storeId);
            }
            
            updateCompareBar();
        }

        // Update compare bar
        function updateCompareBar() {
            const bar = document.getElementById('compareBar');
            const items = document.getElementById('compareItems');
            
            if (compareList.length === 0) {
                bar.classList.remove('active');
                return;
            }
            
            bar.classList.add('active');
            items.innerHTML = compareList.map(id => {
                const store = stores.find(s => s.id === id);
                return `
                    <div class="compare-item">
                        <span>${store.name}</span>
                        <button class="remove-compare" onclick="removeCompare(${id})">×</button>
                    </div>
                `;
            }).join('');
        }

        // Remove from compare
        function removeCompare(storeId) {
            document.getElementById(`compare-${storeId}`).checked = false;
            toggleCompare(storeId);
        }

        // Show comparison
        function showComparison() {
            if (compareList.length < 2) {
                alert('Vui lòng chọn ít nhất 2 quán để so sánh / Please select at least 2 stores to compare');
                return;
            }
            
            const compareStores = compareList.map(id => stores.find(s => s.id === id));
            
            const comparisonHTML = `
                <div class="modal-header">
                    <button class="close-modal" onclick="closeModal()">×</button>
                    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">So Sánh Quán Ăn / Store Comparison</h2>
                </div>
                <div class="modal-body">
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: var(--light);">
                                    <th style="padding: 1rem; text-align: left; border-bottom: 2px solid #E5E5E5;">Tiêu chí / Criteria</th>
                                    ${compareStores.map(store => `
                                        <th style="padding: 1rem; text-align: center; border-bottom: 2px solid #E5E5E5;">
                                            <div style="font-weight: 700; margin-bottom: 0.5rem;">${store.name}</div>
                                            <div style="font-size: 0.85rem; font-weight: 400; color: #666;">${store.type}</div>
                                        </th>
                                    `).join('')}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="padding: 1rem; border-bottom: 1px solid #E5E5E5;"><strong>Điểm An Toàn</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center; border-bottom: 1px solid #E5E5E5;">
                                            <div class="rating-circle ${store.rating}" style="margin: 0 auto;">
                                                ${store.safetyScore}<div class="rating-text">/ 100</div>
                                            </div>
                                        </td>
                                    `).join('')}
                                </tr>
                                <tr>
                                    <td style="padding: 1rem; border-bottom: 1px solid #E5E5E5;"><strong>Chứng Nhận ATTP</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center; border-bottom: 1px solid #E5E5E5;">
                                            ${store.certified ? `✅ ${store.certExpiry}` : '❌ Không'}
                                        </td>
                                    `).join('')}
                                </tr>
                                <tr>
                                    <td style="padding: 1rem; border-bottom: 1px solid #E5E5E5;"><strong>Bếp Mở</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center; border-bottom: 1px solid #E5E5E5;">
                                            ${store.openKitchen ? '✅ Có' : '❌ Không'}
                                        </td>
                                    `).join('')}
                                </tr>
                                <tr>
                                    <td style="padding: 1rem; border-bottom: 1px solid #E5E5E5;"><strong>Dụng Cụ An Toàn</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center; border-bottom: 1px solid #E5E5E5;">
                                            ${store.safeItems ? '✅ Có' : '❌ Không'}
                                        </td>
                                    `).join('')}
                                </tr>
                                <tr>
                                    <td style="padding: 1rem; border-bottom: 1px solid #E5E5E5;"><strong>Nước Sạch</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center; border-bottom: 1px solid #E5E5E5;">
                                            ${store.cleanWater ? '✅ Có' : '❌ Không'}
                                        </td>
                                    `).join('')}
                                </tr>
                                <tr>
                                    <td style="padding: 1rem; border-bottom: 1px solid #E5E5E5;"><strong>Giấy KSKĐK</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center; border-bottom: 1px solid #E5E5E5;">
                                            ${store.staffHealth ? '✅ Có' : '❌ Không'}
                                        </td>
                                    `).join('')}
                                </tr>
                                <tr>
                                    <td style="padding: 1rem;"><strong>Số Đánh Giá</strong></td>
                                    ${compareStores.map(store => `
                                        <td style="padding: 1rem; text-align: center;">⭐ ${store.reviewCount}</td>
                                    `).join('')}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            
            document.querySelector('.modal-content').innerHTML = comparisonHTML;
            document.getElementById('storeModal').classList.add('active');
        }

        // Update statistics on init
        function updateStats() {
            const totalReviews = stores.reduce((sum, store) => sum + store.reviewCount, 0);
            const certified = stores.filter(s => s.certified).length;
            
            document.getElementById('totalStores').textContent = stores.length;
            document.getElementById('certifiedStores').textContent = certified;
            document.getElementById('totalReviews').textContent = (totalReviews / 1000).toFixed(1) + 'K';
        }

        // ----- Analytics (demo data) -----
        function generateFakeTrafficLogs() {
            const ips = [
                '103.21.244.12',
                '113.161.72.44',
                '14.161.3.201',
                '171.244.18.90',
                '203.162.5.150',
                '45.117.80.88',
                '27.72.58.19',
                '116.97.240.77',
                '42.118.10.65',
                '115.79.33.41',
                '123.30.190.22',
                '118.70.5.199',
                '175.103.2.14',
                '183.80.44.120',
                '49.156.54.77',
                '210.245.94.31'
            ];
            const urls = [
                '/',
                '/index_green.html',
                '/script_green.js',
                '/styles_green.css',
                '/api/stores',
                '/api/reviews',
                '/favicon.ico'
            ];
            const referrers = [
                '',
                '',
                '',
                'https://google.com',
                'https://facebook.com',
                'https://zalo.me'
            ];
            const browsers = ['Chrome', 'Safari', 'Edge', 'Firefox', 'Opera'];
            const devices = ['Desktop', 'Mobile', 'Tablet'];
            const statuses = [200, 200, 200, 200, 200, 304, 404, 500];

            const now = Date.now();
            const events = [];

            for (let i = 0; i < 170; i++) {
                const ageHours = Math.floor(Math.random() * 24 * 7);
                const ts = now - ageHours * 60 * 60 * 1000 - Math.floor(Math.random() * 3600000);
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                const durationPool = [22, 35, 44, 70, 95, 140, 220, 670, 1100, 1400];
                const duration = durationPool[Math.floor(Math.random() * durationPool.length)] + Math.floor(Math.random() * 20);

                events.push({
                    ts,
                    ip: ips[Math.floor(Math.random() * ips.length)],
                    url: urls[Math.floor(Math.random() * urls.length)],
                    referrer: referrers[Math.floor(Math.random() * referrers.length)],
                    status,
                    duration,
                    browser: browsers[Math.floor(Math.random() * browsers.length)],
                    device: devices[Math.floor(Math.random() * devices.length)]
                });
            }

            // Explicit spikes to mimic observability screenshots
            const spikeTs = now - 4 * 24 * 60 * 60 * 1000 + 13 * 60 * 60 * 1000;
            for (let i = 0; i < 38; i++) {
                events.push({
                    ts: spikeTs + i * 12000,
                    ip: ips[i % ips.length],
                    url: '/api/stores',
                    referrer: '',
                    status: 200,
                    duration: 120 + (i % 5) * 8,
                    browser: 'Chrome',
                    device: i % 3 === 0 ? 'Desktop' : 'Mobile'
                });
            }

            return events.sort((a, b) => a.ts - b.ts);
        }

        function renderAnalytics() {
            const section = document.getElementById('analytics-section');
            if (!section) return;

            const rangeEl = document.getElementById('analyticsRange');
            const range = rangeEl ? rangeEl.value : '7d';
            const now = Date.now();
            const lookbackMs = range === '24h' ? 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;
            const filtered = analyticsLogs.filter(row => row.ts >= now - lookbackMs);

            const uniqueIps = new Set(filtered.map(row => row.ip)).size;
            const uniqueIpLabel = document.getElementById('uniqueIpLabel');
            if (uniqueIpLabel) uniqueIpLabel.textContent = `${uniqueIps} unique IP addresses`;

            renderRequestsLine(filtered, range);
            renderStatusLine(analyticsLogs, now);
            renderTopLists(filtered);
            renderDurationHistogram(filtered);
            renderPiePanels(filtered);
        }

        function bucketByTime(logs, range) {
            if (range === '24h') {
                const labels = [];
                const counts = [];
                const now = new Date();
                for (let i = 23; i >= 0; i--) {
                    const d = new Date(now.getTime() - i * 60 * 60 * 1000);
                    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}`;
                    labels.push(`${String(d.getHours()).padStart(2, '0')}:00`);
                    counts.push({ key: k, value: 0 });
                }
                logs.forEach(log => {
                    const d = new Date(log.ts);
                    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}`;
                    const idx = counts.findIndex(c => c.key === k);
                    if (idx > -1) counts[idx].value += 1;
                });
                return { labels, values: counts.map(c => c.value) };
            }

            const labels = [];
            const values = [];
            const today = new Date();
            for (let i = 6; i >= 0; i--) {
                const d = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
                labels.push(`${d.getMonth() + 1}/${d.getDate()}`);
                values.push(0);
            }
            logs.forEach(log => {
                const daysAgo = Math.floor((today.getTime() - log.ts) / (24 * 60 * 60 * 1000));
                const idx = 6 - daysAgo;
                if (idx >= 0 && idx < values.length) values[idx] += 1;
            });
            return { labels, values };
        }

        function renderSimpleLineChart(svgId, values, showAxisLabels) {
            const svg = document.getElementById(svgId);
            if (!svg) return;

            const width = 1000;
            const height = svgId === 'statusLineChart' ? 220 : 280;
            const padLeft = showAxisLabels ? 56 : 24;
            const padRight = 24;
            const padTop = 24;
            const padBottom = 24;
            const max = Math.max(1, ...values);
            const stepX = values.length > 1
                ? (width - padLeft - padRight) / (values.length - 1)
                : width - padLeft - padRight;

            let points = '';
            values.forEach((v, i) => {
                const x = padLeft + i * stepX;
                const y = height - padBottom - (v / max) * (height - padTop - padBottom);
                points += `${x},${y} `;
            });

            let grid = '';
            let labels = '';
            for (let i = 0; i < 5; i++) {
                const gy = padTop + i * ((height - padTop - padBottom) / 4);
                grid += `<line x1="${padLeft}" y1="${gy}" x2="${width - padRight}" y2="${gy}" stroke="#1f2937" stroke-width="1"/>`;
                if (showAxisLabels) {
                    const yValue = Math.round(max - (i * max / 4));
                    labels += `<text x="${padLeft - 10}" y="${gy + 4}" text-anchor="end" font-size="13" fill="#94A3B8">${yValue}</text>`;
                }
            }

            svg.innerHTML = `
                <rect x="0" y="0" width="${width}" height="${height}" fill="transparent"></rect>
                ${grid}
                ${labels}
                <polyline fill="none" stroke="#4DA3FF" stroke-width="3" points="${points.trim()}"></polyline>
            `;
        }

        function renderRequestsLine(logs, range) {
            const bucket = bucketByTime(logs, range);
            renderSimpleLineChart('requestsLineChart', bucket.values, true);
        }

        function renderStatusLine(allLogs, nowMs) {
            const last24 = allLogs.filter(row => row.ts >= nowMs - 24 * 60 * 60 * 1000);
            const hourly = new Array(24).fill(0);
            last24.forEach(log => {
                if (log.status >= 200 && log.status < 400) {
                    const h = Math.floor((nowMs - log.ts) / (60 * 60 * 1000));
                    const idx = 23 - h;
                    if (idx >= 0 && idx < 24) hourly[idx] += 1;
                }
            });
            renderSimpleLineChart('statusLineChart', hourly, false);
        }

        function renderTopLists(logs) {
            const topUrls = countTop(logs.map(x => x.url), 6);
            const topRef = countTop(logs.map(x => x.referrer).filter(Boolean), 6);

            const urlEl = document.getElementById('topUrlsList');
            if (urlEl) {
                urlEl.innerHTML = topUrls.map(item => `
                    <div class="metric-row">
                        <span>${item.label}</span>
                        <strong>${item.count}</strong>
                    </div>
                `).join('');
            }

            const refEl = document.getElementById('topReferrersList');
            if (refEl) {
                refEl.innerHTML = topRef.length
                    ? topRef.map(item => `
                        <div class="metric-row">
                            <span>${item.label}</span>
                            <strong>${item.count}</strong>
                        </div>
                    `).join('')
                    : '<div class="metric-row"><span>No results</span><strong>0</strong></div>';
            }
        }

        function renderDurationHistogram(logs) {
            const bins = [
                { label: '< 49', test: d => d < 49, count: 0 },
                { label: '< 149', test: d => d >= 49 && d < 149, count: 0 },
                { label: '< 299', test: d => d >= 149 && d < 299, count: 0 },
                { label: '< 499', test: d => d >= 299 && d < 499, count: 0 },
                { label: '< 999', test: d => d >= 499 && d < 999, count: 0 },
                { label: '1000+', test: d => d >= 999, count: 0 }
            ];

            logs.forEach(log => {
                const bin = bins.find(b => b.test(log.duration));
                if (bin) bin.count += 1;
            });

            const max = Math.max(1, ...bins.map(b => b.count));
            const host = document.getElementById('durationBars');
            if (!host) return;

            host.innerHTML = bins.map(bin => {
                const h = Math.max(4, Math.round((bin.count / max) * 140));
                return `
                    <div class="duration-bar-wrap">
                        <div class="duration-value">${bin.count}</div>
                        <div class="duration-bar" style="height:${h}px"></div>
                        <div class="duration-label">${bin.label}</div>
                    </div>
                `;
            }).join('');
        }

        function renderPiePanels(logs) {
            const browserTop = countTop(logs.map(x => x.browser), 6);
            const deviceTop = countTop(logs.map(x => x.device), 6);
            renderConicPie('browserPie', 'browserLegend', browserTop);
            renderConicPie('devicePie', 'deviceLegend', deviceTop);
        }

        function renderConicPie(pieId, legendId, rows) {
            const palette = ['#60A5FA', '#8B6FD6', '#DB5DBD', '#F59E0B', '#84CC16', '#14B8A6'];
            const total = rows.reduce((sum, row) => sum + row.count, 0) || 1;

            let cursor = 0;
            const slices = rows.map((row, idx) => {
                const size = (row.count / total) * 360;
                const from = cursor;
                const to = cursor + size;
                cursor = to;
                return `${palette[idx % palette.length]} ${from.toFixed(2)}deg ${to.toFixed(2)}deg`;
            });

            const pie = document.getElementById(pieId);
            if (pie) pie.style.background = `conic-gradient(${slices.join(', ')})`;

            const legend = document.getElementById(legendId);
            if (legend) {
                legend.innerHTML = rows.map((row, idx) => `
                    <div class="pie-legend-item">
                        <span class="legend-dot" style="background:${palette[idx % palette.length]}"></span>
                        <span>${row.label} (${row.count})</span>
                    </div>
                `).join('');
            }
        }

        function countTop(items, limit) {
            const map = new Map();
            items.forEach(item => map.set(item, (map.get(item) || 0) + 1));
            return [...map.entries()]
                .sort((a, b) => b[1] - a[1])
                .slice(0, limit)
                .map(([label, count]) => ({ label, count }));
        }



