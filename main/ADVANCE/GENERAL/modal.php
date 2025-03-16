<!-- Modal -->
<div class="modal fade" id="alertModal" tabindex="-1" aria-labelledby="alertModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white">
                <h5 class="modal-title" id="modalTitle">در حال ارتباط...</h5>
            </div>
            <div class="modal-body">
                <p id="modalMessage">لطفاً صبر کنید، عملیات در حال انجام است.</p>

                <!-- Progress Bar -->
                <div class="progress" style="height: 25px;">
                    <div id="progressBar_Madal" class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                         role="progressbar" style="width: 0%;">0%</div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="closeButton" disabled>بستن</button>
            </div>
        </div>
    </div>
</div>