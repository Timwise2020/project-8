
<script>
  const SERVICE_ID = process.env.EMAILJS_SERVICE_ID
  const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY



  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById("submit-btn");
  const btnText = submitBtn.querySelector('.btn-text');
  const spinner = document.getElementById("spinner");

  form.addEventListener('submit', function (e) {
    e.preventDefault();

  const fromName = form.from_name.value.trim();
  const fromEmail = form.from_email.value.trim();
  const message = form.message.value.trim();

  if (!fromName || !fromEmail || !message)
  alert("Please fill in all fields.");
  return;

  


  submitBtn.disabled = true;
  btnText.textContent = "Sending...";
  spinner.style.display = "inline-block";

  const formData =
  from_name: fromName,
  to_name: "Timothy",
  from_email: fromEmail,
  to_email: "peterstimothy155@gmail.com",
  message: message,
  ;

  emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
    alert("Thank you for reaching out! I'll respond to your message shortly.");
  form.reset();
      })
      .catch((error) => {
    console.error("EmailJS error:", error);
  alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
    submitBtn.disabled = false;
  btnText.textContent = "Send Message";
  spinner.style.display = "none";
      });
  });

</script>


