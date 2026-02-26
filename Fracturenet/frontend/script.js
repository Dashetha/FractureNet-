// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sidebarItems = document.querySelectorAll('.sidebar-item');
const pages = document.querySelectorAll('.page');
const uploadZone = document.getElementById('uploadZone');
const browseFilesBtn = document.getElementById('browseFiles');
const uploadProgress = document.getElementById('uploadProgress');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');
const aiProcessing = document.getElementById('aiProcessing');
const heatmapToggle = document.getElementById('heatmapToggle');
const heatmapBtn = document.getElementById('heatmapBtn');
const heatmapOverlay = document.getElementById('heatmapOverlay');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const exportBtn = document.getElementById('exportBtn');
const acceptFindingBtn = document.getElementById('acceptFindingBtn');
const modifyReportBtn = document.getElementById('modifyReportBtn');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const finalizeReportBtn = document.getElementById('finalizeReportBtn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set current date in report if needed
    updateDateInReport();
    
    // Initialize event listeners
    initEventListeners();
    
    // Initialize animations
    initAnimations();
    
    // Simulate some initial data loading
    simulateDataLoading();
});

// Initialize all event listeners
function initEventListeners() {
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
            
            // Update active state
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Sidebar items
    sidebarItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
            
            // Update active state
            sidebarItems.forEach(sidebarItem => sidebarItem.classList.remove('active'));
            this.classList.add('active');
            
            // Update nav links to match
            navLinks.forEach(nav => {
                if (nav.getAttribute('data-page') === pageId) {
                    nav.classList.add('active');
                } else {
                    nav.classList.remove('active');
                }
            });
        });
    });
    
    // Upload zone functionality
    if (uploadZone) {
        uploadZone.addEventListener('click', function() {
            triggerFileUpload();
        });
        
        uploadZone.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--accent-blue)';
            this.style.backgroundColor = 'rgba(13, 202, 240, 0.05)';
        });
        
        uploadZone.addEventListener('dragleave', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--border-color)';
            this.style.backgroundColor = 'var(--bg-card-light)';
        });
        
        uploadZone.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--border-color)';
            this.style.backgroundColor = 'var(--bg-card-light)';
            
            // Simulate file upload
            simulateFileUpload();
        });
    }
    
    // Browse files button
    if (browseFilesBtn) {
        browseFilesBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            triggerFileUpload();
        });
    }
    
    // Heatmap toggle
    if (heatmapToggle) {
        heatmapToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            heatmapOverlay.classList.toggle('active', isChecked);
            heatmapBtn.classList.toggle('active', isChecked);
            heatmapBtn.innerHTML = isChecked ? 
                '<i class="fas fa-fire"></i> Hide Heatmap' : 
                '<i class="fas fa-fire"></i> Show Heatmap';
        });
    }
    
    // Heatmap button
    if (heatmapBtn) {
        heatmapBtn.addEventListener('click', function() {
            const isActive = heatmapOverlay.classList.contains('active');
            heatmapOverlay.classList.toggle('active', !isActive);
            heatmapToggle.checked = !isActive;
            this.classList.toggle('active', !isActive);
            this.innerHTML = !isActive ? 
                '<i class="fas fa-fire"></i> Hide Heatmap' : 
                '<i class="fas fa-fire"></i> Show Heatmap';
        });
    }
    
    // Zoom out button
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            // In a real app, this would zoom out the image
            showNotification('Zooming out scan view', 'info');
        });
    }
    
    // Export button
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            showNotification('Exporting scan and analysis data...', 'info');
            // Simulate export process
            setTimeout(() => {
                showNotification('Scan exported successfully!', 'success');
            }, 1500);
        });
    }
    
    // Accept finding button
    if (acceptFindingBtn) {
        acceptFindingBtn.addEventListener('click', function() {
            showNotification('AI finding accepted and added to report', 'success');
        });
    }
    
    // Modify report button
    if (modifyReportBtn) {
        modifyReportBtn.addEventListener('click', function() {
            // In a real app, this would open an editor
            showNotification('Opening report editor...', 'info');
        });
    }
    
    // Download PDF button
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', function() {
            showNotification('Generating PDF report...', 'info');
            // Simulate PDF generation
            setTimeout(() => {
                showNotification('PDF report downloaded successfully!', 'success');
            }, 2000);
        });
    }
    
    // Finalize report button
    if (finalizeReportBtn) {
        finalizeReportBtn.addEventListener('click', function() {
            const confirmed = confirm('Are you sure you want to finalize this report? Once finalized, it cannot be edited.');
            if (confirmed) {
                showNotification('Report finalized and sent to patient records', 'success');
            }
        });
    }
}

// Switch between pages
function switchPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Special handling for specific pages
        if (pageId === 'upload') {
            resetUploadPage();
        }
    }
}

// Trigger file upload dialog
function triggerFileUpload() {
    // In a real app, this would trigger the file input
    // For this demo, we simulate the upload
    simulateFileUpload();
}

// Simulate file upload process
function simulateFileUpload() {
    // Show upload progress
    uploadProgress.style.display = 'block';
    
    // Simulate upload progress
    let progress = 0;
    const uploadInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressPercent.textContent = `${Math.round(progress)}%`;
        
        if (progress >= 100) {
            clearInterval(uploadInterval);
            
            // Hide progress, show AI processing
            setTimeout(() => {
                uploadProgress.style.display = 'none';
                aiProcessing.style.display = 'block';
                
                // Simulate AI processing
                simulateAIProcessing();
            }, 500);
        }
    }, 200);
}

// Simulate AI processing
function simulateAIProcessing() {
    // Simulate AI analysis taking time
    setTimeout(() => {
        // Hide processing indicator
        aiProcessing.style.display = 'none';
        
        // Show success message and switch to analysis page
        showNotification('Scan analyzed successfully! AI has detected potential abnormalities.', 'success');
        
        // Switch to analysis page after a delay
        setTimeout(() => {
            switchPage('analysis');
            
            // Update navigation
            navLinks.forEach(nav => {
                nav.classList.remove('active');
                if (nav.getAttribute('data-page') === 'analysis') {
                    nav.classList.add('active');
                }
            });
            
            // Update sidebar
            sidebarItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-page') === 'analysis') {
                    item.classList.add('active');
                }
            });
        }, 1000);
    }, 3000);
}

// Reset upload page to initial state
function resetUploadPage() {
    uploadProgress.style.display = 'none';
    aiProcessing.style.display = 'none';
    progressBar.style.width = '0%';
    progressPercent.textContent = '0%';
}

// Initialize animations
function initAnimations() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add pulse animation to logo
    const logoIcon = document.querySelector('.logo-icon');
    if (logoIcon) {
        setInterval(() => {
            logoIcon.style.animation = 'none';
            setTimeout(() => {
                logoIcon.style.animation = 'pulse 3s infinite';
            }, 10);
        }, 10000);
    }
}

// Simulate data loading
function simulateDataLoading() {
    // Simulate initial data load
    setTimeout(() => {
        // Update some stats with animation
        const statValues = document.querySelectorAll('.stat-data h3');
        statValues.forEach((value, index) => {
            const originalText = value.textContent;
            value.textContent = '0';
            
            let count = 0;
            const target = parseInt(originalText.replace(/,/g, ''));
            const increment = target / 50;
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                value.textContent = Math.floor(count).toLocaleString();
            }, 20);
        });
    }, 500);
}

// Update date in report
function updateDateInReport() {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const dateElements = document.querySelectorAll('.current-date');
    
    dateElements.forEach(element => {
        element.textContent = dateString;
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background-color: var(--bg-card);
        border: 1px solid ${type === 'success' ? 'var(--accent-green)' : 'var(--accent-blue)'};
        border-left: 4px solid ${type === 'success' ? 'var(--accent-green)' : 'var(--accent-blue)'};
        border-radius: 8px;
        padding: 15px 20px;
        box-shadow: var(--shadow);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        transform: translateX(400px);
        transition: transform 0.3s ease-out;
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
    `;
    
    notification.querySelector('i').style.color = type === 'success' ? 'var(--accent-green)' : 'var(--accent-blue)';
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 5px;
        margin-left: 10px;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Simulate live data updates
setInterval(() => {
    // Only update if dashboard is active
    const dashboardPage = document.getElementById('dashboard-page');
    if (dashboardPage && dashboardPage.classList.contains('active')) {
        // Randomly update pending reviews
        const pendingElement = document.querySelector('.stat-icon.reviews').parentElement.querySelector('h3');
        const currentPending = parseInt(pendingElement.textContent);
        const change = Math.random() > 0.7 ? 1 : Math.random() > 0.5 ? -1 : 0;
        const newValue = Math.max(0, currentPending + change);
        
        if (newValue !== currentPending) {
            pendingElement.textContent = newValue;
            
            // Add animation effect
            pendingElement.style.transform = 'scale(1.2)';
            setTimeout(() => {
                pendingElement.style.transform = 'scale(1)';
            }, 300);
        }
        
        // Add a new row to the table occasionally
        if (Math.random() > 0.8) {
            const tableBody = document.querySelector('tbody');
            const newRow = document.createElement('tr');
            
            const patientId = `#P-${Math.floor(10000 + Math.random() * 90000)}`;
            const scanTypes = ['Chest X-ray', 'Brain MRI', 'CT Scan', 'X-ray (Knee)', 'Ultrasound'];
            const scanType = scanTypes[Math.floor(Math.random() * scanTypes.length)];
            const date = new Date().toISOString().split('T')[0];
            const findings = ['No abnormalities', 'Pneumonia detected', 'Possible fracture', 'Analyzing...'];
            const finding = findings[Math.floor(Math.random() * findings.length)];
            const statuses = ['Completed', 'Pending Review', 'Processing'];
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            
            newRow.innerHTML = `
                <td>${patientId}</td>
                <td>${scanType}</td>
                <td>${date}</td>
                <td>${finding}</td>
                <td><span class="status-badge status-${status.toLowerCase().replace(' ', '-')}">${status}</span></td>
            `;
            
            // Add animation
            newRow.style.opacity = '0';
            newRow.style.transform = 'translateY(-20px)';
            
            tableBody.insertBefore(newRow, tableBody.firstChild);
            
            // Animate in
            setTimeout(() => {
                newRow.style.transition = 'opacity 0.5s, transform 0.5s';
                newRow.style.opacity = '1';
                newRow.style.transform = 'translateY(0)';
            }, 10);
            
            // Limit table rows
            if (tableBody.children.length > 6) {
                const lastRow = tableBody.lastElementChild;
                lastRow.style.opacity = '0';
                lastRow.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    if (lastRow.parentNode) {
                        lastRow.parentNode.removeChild(lastRow);
                    }
                }, 500);
            }
        }
    }
}, 10000); // Update every 10 seconds