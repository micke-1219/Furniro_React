import '../css/AlertBox.css';

function AlertBox() {
  return (
    <div className='alert alert-warning alert-dismissible' role='alert'>
        <div className='container d-flex justify-content-between align-items-center'>
            <p>UI-design made by UIUX-Expert - <a href='https://www.figma.com/community/file/1252561852327562039' target='_blank'>Link here!</a></p>
            <button type='button' className='btn-close-alert' data-bs-dismiss='alert' aria-label='Close'><i class='bi bi-x-lg'></i></button>
        </div>
    </div>
  );
}

export default AlertBox;