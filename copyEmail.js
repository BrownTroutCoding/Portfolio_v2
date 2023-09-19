const copyEmailBtn = document.getElementById('copyEmailBtn');
const copyEmailBtnFooter = document.getElementById('copyEmailBtnFooter'); // New ID
const email = 'Austinbev.dev@gmail.com';

const copyEmailToClipboard = (btn) => {
  navigator.clipboard.writeText(email)
    .then(() => {
        btn.innerText = 'Email Copied!';
    })
    .catch(err => {
        console.error('Could not copy text: ', err)
    });
}

copyEmailBtn.addEventListener('click', () => copyEmailToClipboard(copyEmailBtn));
copyEmailBtnFooter.addEventListener('click', () => copyEmailToClipboard(copyEmailBtnFooter)); // Add event listener for footer button

