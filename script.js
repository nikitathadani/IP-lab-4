// Define the Person class
class Person {
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }

    printDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Mobile: ${this.mobile}`);
    }

    // Arrow function as a non-member function
    static greet = () => console.log("Hello from Person class!");
}

// Define the Student class inheriting from Person
class Student extends Person {
    constructor(name, mobile, rollNo) {
        super(name, mobile);
        this.rollNo = rollNo;
    }

    printDetails() {
        super.printDetails();
        console.log(`Roll No: ${this.rollNo}`);
    }

    validateRollNo() {
        if (this.rollNo <= 0) {
            throw new Error("Roll number must be greater than zero.");
        }
    }
}

// Form validation function
function validateForm() {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    const receipt = document.getElementById('receipt');
    
    const mobilePattern = /^\d{9}$/;
    
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 9-digit mobile number.");
        return false;
    }

    if (message.length > 100) {
        alert("Message should not exceed 100 characters.");
        return false;
    }

    if (!service) {
        alert("Please select a service type.");
        return false;
    }

    const currentDate = new Date();
    receipt.innerHTML = `
        <h3>Order Receipt</h3>
        <p>Order Confirmation Date: ${currentDate.toLocaleDateString()}</p>
        <p>Name: ${name}</p>
        <p>Mobile Number: ${mobile}</p>
        <p>Service Type: ${service}</p>
        <p>Message: ${message}</p>
    `;
    receipt.style.display = 'block';
    
    // To simulate receipt creation, the following is a placeholder
    // In a real scenario, you would likely submit the form to a server
    console.log("Order received!");

    return false; // Prevent form submission to allow receipt display
}

// Attach the form validation to the form submit event
document.getElementById('cleaning-form').onsubmit = validateForm;
