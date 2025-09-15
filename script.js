// Protected Media Analytics Dashboard - Production Version
(function() {
    'use strict';
    
    // Protection measures
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; });
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || (e.ctrlKey && e.keyCode === 85)) {
            e.preventDefault(); return false;
        }
    });
    
    console.clear();
    console.log('%c⚠️ WARNING ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. Do not paste any code here that you do not understand.', 'color: red; font-size: 14px;');
    console.log('%cUnauthorized access to this code is prohibited.', 'color: red; font-size: 12px;');
    
    // Obfuscated variables
    var _0x1a2b = {};
    var _0x3c4d = [];
    var _0x5e6f = null;
    var _0x7g8h = null;
    var _0x9i0j = null;
    var _0x1k2l = null;
    var _0x3m4n = false;
    
    // Obfuscated sample data
    var _0x5o6p = {
        _0x7q8r: {
            labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
            data: [25, 30, 20, 15, 7, 3],
            colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3']
        },
        _0x5y6z: {
            labels: ['Mobile', 'Desktop', 'Tablet', 'Smart TV'],
            data: [45, 35, 15, 5],
            colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']
        },
        _0x3g4h: {
            labels: [],
            viewers: [],
            maxPoints: 20
        },
        _0x1o2p: {
            _0x3q4r: [
                { name: 'Île-de-France', lat: 48.8566, lng: 2.3522, viewers: 125000, engagement: 8.5 },
                { name: 'Auvergne-Rhône-Alpes', lat: 45.7640, lng: 4.8357, viewers: 85000, engagement: 8.2 },
                { name: 'Provence-Alpes-Côte d\'Azur', lat: 43.2965, lng: 5.3698, viewers: 75000, engagement: 7.9 },
                { name: 'Nouvelle-Aquitaine', lat: 44.8378, lng: -0.5792, viewers: 65000, engagement: 7.8 },
                { name: 'Occitanie', lat: 43.6047, lng: 1.4442, viewers: 60000, engagement: 7.6 },
                { name: 'Hauts-de-France', lat: 50.6292, lng: 3.0573, viewers: 55000, engagement: 7.4 },
                { name: 'Grand Est', lat: 48.5734, lng: 7.7521, viewers: 50000, engagement: 7.3 },
                { name: 'Bretagne', lat: 48.2020, lng: -2.9326, viewers: 45000, engagement: 7.2 },
                { name: 'Pays de la Loire', lat: 47.4739, lng: -0.5517, viewers: 40000, engagement: 7.1 },
                { name: 'Normandie', lat: 49.1829, lng: -0.3707, viewers: 35000, engagement: 7.0 },
                { name: 'Centre-Val de Loire', lat: 47.7516, lng: 1.6751, viewers: 30000, engagement: 6.9 },
                { name: 'Bourgogne-Franche-Comté', lat: 47.2375, lng: 6.0241, viewers: 25000, engagement: 6.8 },
                { name: 'Corse', lat: 42.0396, lng: 9.0129, viewers: 15000, engagement: 6.5 }
            ]
        }
    };
    
    // Obfuscated functions
    function _0x1a2b3c() {
        _0x4d5e6f();
        _0x7g8h9i();
        _0x4m5n6o();
        _0x1j2k3l();
    }
    
    function _0x4d5e6f() {
        _0x1a2b3c4d();
        _0x5e6f7g8h();
        _0x9i0j1k2l();
    }
    
    function _0x1a2b3c4d() {
        var _0x5m6n7o8p = document.getElementById('demographicsChart');
        if (_0x5m6n7o8p) {
            var _0x9q0r1s2t = _0x5m6n7o8p.getContext('2d');
            _0x1a2b.demographics = new Chart(_0x9q0r1s2t, {
                type: 'doughnut',
                data: {
                    labels: _0x5o6p._0x7q8r.labels,
                    datasets: [{
                        data: _0x5o6p._0x7q8r.data,
                        backgroundColor: _0x5o6p._0x7q8r.colors,
                        borderWidth: 0,
                        hoverOffset: 10
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                padding: 20,
                                usePointStyle: true
                            }
                        }
                    },
                    cutout: '60%'
                }
            });
        }
    }
    
    function _0x5e6f7g8h() {
        var _0x9i0j1k2l = document.getElementById('deviceChart');
        if (_0x9i0j1k2l) {
            var _0x3m4n5o6p = _0x9i0j1k2l.getContext('2d');
            _0x1a2b.device = new Chart(_0x3m4n5o6p, {
                type: 'pie',
                data: {
                    labels: _0x5o6p._0x5y6z.labels,
                    datasets: [{
                        data: _0x5o6p._0x5y6z.data,
                        backgroundColor: _0x5o6p._0x5y6z.colors,
                        borderWidth: 0,
                        hoverOffset: 15
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: 'rgba(255, 255, 255, 0.8)',
                                padding: 20,
                                usePointStyle: true
                            }
                        }
                    }
                }
            });
        }
    }
    
    function _0x9i0j1k2l() {
        var _0x7q8r9s0t = document.getElementById('realtimeChart');
        if (_0x7q8r9s0t) {
            var _0x1u2v3w4x = _0x7q8r9s0t.getContext('2d');
            
            for (var _0x5y6z7a8b = 0; _0x5y6z7a8b < _0x5o6p._0x3g4h.maxPoints; _0x5y6z7a8b++) {
                _0x5o6p._0x3g4h.labels.push('');
                _0x5o6p._0x3g4h.viewers.push(Math.random() * 1000 + 500);
            }
            
            _0x1a2b.realtime = new Chart(_0x1u2v3w4x, {
                type: 'line',
                data: {
                    labels: _0x5o6p._0x3g4h.labels,
                    datasets: [{
                        label: 'Viewers',
                        data: _0x5o6p._0x3g4h.viewers,
                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        borderWidth: 2,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    },
                    interaction: { intersect: false }
                }
            });
        }
    }
    
    function _0x7g8h9i() {
        _0x5e6f = L.map('franceMap').setView([46.2276, 2.2137], 6);
        _0x1k2l = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(_0x5e6f);
        
        _0x5o6p._0x1o2p._0x3q4r.forEach(function(_0x7s8t9u) {
            var _0x1v2w3x = L.divIcon({
                className: 'custom-marker',
                html: '<div class="marker-container"><div class="marker-pulse"></div><div class="marker-dot"></div></div>',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
            
            var _0x4y5z6a = L.marker([_0x7s8t9u.lat, _0x7s8t9u.lng], { icon: _0x1v2w3x })
                .addTo(_0x5e6f)
                .bindPopup('<div class="popup-content"><h3>' + _0x7s8t9u.name + '</h3><p><strong>Viewers:</strong> ' + _0x7s8t9u.viewers.toLocaleString() + '</p><p><strong>Engagement:</strong> ' + _0x7s8t9u.engagement + '/10</p></div>');
            _0x3c4d.push(_0x4y5z6a);
        });
        
        _0x8k9l0m1n2o();
    }
    
    function _0x8k9l0m1n2o() {
        var _0x3p4q5r6s = _0x5o6p._0x1o2p._0x3q4r.map(function(_0x7t8u9v0w) {
            return {
                lat: _0x7t8u9v0w.lat,
                lng: _0x7t8u9v0w.lng,
                intensity: _0x7t8u9v0w.viewers / 100000
            };
        });
        
        _0x7g8h = L.layerGroup();
        
        _0x3p4q5r6s.forEach(function(_0x1x2y3z4a) {
            var _0x5b6c7d8e = L.circle([_0x1x2y3z4a.lat, _0x1x2y3z4a.lng], {
                radius: _0x1x2y3z4a.intensity * 50000,
                fillColor: '#ff6b6b',
                color: '#4ecdc4',
                weight: 3,
                opacity: 0.6,
                fillOpacity: 0.4
            });
            _0x7g8h.addLayer(_0x5b6c7d8e);
        });
    }
    
    function _0x1j2k3l() {
        document.getElementById('refreshData').addEventListener('click', _0x4m5n6o7p);
        document.getElementById('timeRange').addEventListener('change', _0x8q9r0s1t);
        
        document.getElementById('showHeatmap').addEventListener('click', _0x0c1d2e3f);
        document.getElementById('showMarkers').addEventListener('click', _0x4g5h6i7j);
        document.getElementById('satelliteView').addEventListener('click', _0x9i0j1k);
    }
    
    function _0x4m5n6o7p() {
        var _0x2p3q4r5s = document.getElementById('refreshData');
        _0x2p3q4r5s.classList.add('loading');
        _0x2p3q4r5s.textContent = 'Refreshing...';
        
        setTimeout(function() {
            _0x6t7u8v9w();
            _0x2p3q4r5s.classList.remove('loading');
            _0x2p3q4r5s.textContent = 'Refresh Data';
            _0x2p3q4r5s.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
            setTimeout(function() {
                _0x2p3q4r5s.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }, 2000);
        }, 2000);
    }
    
    function _0x8q9r0s1t(_0x1x2y3z4a) {
        var _0x5b6c7d8e = _0x1x2y3z4a.target.value;
        _0x6t7u8v9w();
    }
    
    
    function _0x0c1d2e3f() {
        var _0x3f4g5h6i = document.getElementById('showHeatmap');
        if (!_0x3f4g5h6i || !_0x5e6f || !_0x7g8h) return;
        
        _0x3f4g5h6i.classList.toggle('active');
        
        if (_0x3f4g5h6i.classList.contains('active')) {
            _0x5e6f.addLayer(_0x7g8h);
            _0x3c4d.forEach(function(_0x9j0k1l2m) {
                if (_0x9j0k1l2m && _0x9j0k1l2m._map) {
                    _0x5e6f.removeLayer(_0x9j0k1l2m);
                }
            });
        } else {
            _0x5e6f.removeLayer(_0x7g8h);
            _0x3c4d.forEach(function(_0x3n4o5p6q) {
                if (_0x3n4o5p6q) {
                    _0x5e6f.addLayer(_0x3n4o5p6q);
                }
            });
        }
    }
    
    function _0x4g5h6i7j() {
        var _0x8r9s0t1u = document.getElementById('showMarkers');
        if (!_0x8r9s0t1u || !_0x5e6f) return;
        
        _0x8r9s0t1u.classList.toggle('active');
        
        if (_0x8r9s0t1u.classList.contains('active')) {
            _0x3c4d.forEach(function(_0x2v3w4x5y) {
                if (_0x2v3w4x5y) {
                    _0x5e6f.addLayer(_0x2v3w4x5y);
                }
            });
        } else {
            _0x3c4d.forEach(function(_0x6z7a8b9c) {
                if (_0x6z7a8b9c && _0x6z7a8b9c._map) {
                    _0x5e6f.removeLayer(_0x6z7a8b9c);
                }
            });
        }
    }
    
    function _0x9i0j1k() {
        var _0x2l3m4n5o = document.getElementById('satelliteView');
        if (!_0x2l3m4n5o || !_0x5e6f || !_0x1k2l) return;
        
        if (_0x3m4n) {
            _0x5e6f.removeLayer(_0x1k2l);
            _0x1k2l = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18
            }).addTo(_0x5e6f);
            _0x2l3m4n5o.textContent = 'Satellite';
            _0x2l3m4n5o.classList.remove('active');
            _0x3m4n = false;
        } else {
            _0x5e6f.removeLayer(_0x1k2l);
            _0x1k2l = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '© Esri'
            }).addTo(_0x5e6f);
            _0x2l3m4n5o.textContent = 'Map';
            _0x2l3m4n5o.classList.add('active');
            _0x3m4n = true;
        }
    }
    
    function _0x4m5n6o() {
        _0x7p8q9r0s();
    }
    
    function _0x7p8q9r0s() {
        setInterval(function() {
            _0x1t2u3v4w();
            _0x5x6y7z8a();
        }, 2000);
    }
    
    function _0x1t2u3v4w() {
        var _0x9b0c1d2e = document.getElementById('currentViewers');
        var _0x3f4g5h6i = document.getElementById('newSubscribers');
        var _0x7j8k9l0m = document.getElementById('socialShares');
        
        if (_0x9b0c1d2e) {
            var _0x1n2o3p4q = 1000;
            var _0x5r6s7t8u = Math.floor(Math.random() * 500) - 250;
            _0x9b0c1d2e.textContent = (_0x1n2o3p4q + _0x5r6s7t8u).toLocaleString();
        }
        
        if (_0x3f4g5h6i) {
            var _0x9v0w1x2y = Math.floor(Math.random() * 10) + 15;
            _0x3f4g5h6i.textContent = _0x9v0w1x2y;
        }
        
        if (_0x7j8k9l0m) {
            var _0x3z4a5b6c = Math.floor(Math.random() * 50) + 100;
            _0x7j8k9l0m.textContent = _0x3z4a5b6c;
        }
    }
    
    function _0x5x6y7z8a() {
        if (_0x1a2b.realtime) {
            _0x1a2b.realtime.data.datasets[0].data.shift();
            _0x1a2b.realtime.data.datasets[0].data.push(Math.random() * 1000 + 500);
            _0x1a2b.realtime.update('none');
        }
    }
    
    function _0x6t7u8v9w() {
        // Simulate data updates
    }
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        _0x1a2b3c();
    });
    
    // Additional protection measures
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            document.body.innerHTML = '<div style="text-align:center; padding:50px; font-family:Arial; color:red;"><h1>Developer Tools Detected</h1><p>Please close developer tools to continue.</p></div>';
        }
    }, 1000);
    
})();
