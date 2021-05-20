// HELPER FUNCTION
const $ = (id) => {
    return document.getElementById(id);
};


let bankAccount = function(ownerName) {
    let balance = '';
    let owner = ownerName;
    let getBalance = function (x, y) {
        return balance;
    };
    let getOwnerName = function (owner) {
        return owner;
    }
    $("name").addEventListener('click', function() {
        owner = prompt("Please enter the account holder's name.");
        if (owner === null || owner === '') {
            alert('No account holder info entered, please enter account holder\'s name');
        } else {return $("output").innerHTML = `Welcome to ${owner}'s bank account.`;}
    });
    
    let withdrawal = function(withdrawalAmount, getBalance, getOwnerName) {
        withdrawalAmount = window.prompt(parseInt('Please enter the amount you would like to withdraw.'));
        if (withdrawalAmount === '' || withdrawalAmount === NaN) {
            alert('Invalid Entry. Please enter an amount to withdrawal.');
        }
        newBalance = balance - withdrawalAmount;
        // getBalance(newBalance - balance);
        return $("output").innerHTML = `${owner} you're new balance is $${newBalance}`;
    };
    $("withdrawal").addEventListener('click', withdrawal);

    let deposit = function(depositAmount, getBalance, getOwnerName) {
        depositAmount = window.prompt(parseInt('Please enter the amount you would like to deposit.'));
        if (depositAmount === '' || depositAmount === NaN) {
            alert('Invalid Entry. Please enter an amount to withdrawal.');
        }
        deposit = balance + depositAmount;
        return $("output").innerHTML = `${owner} you're new balance is $${deposit}`;
    };
    $("deposit").addEventListener('click', deposit);
};
bankAccount();

    // startSlideShow: function (image, caption) {
    //     if (arguments.length == 2) {
    //     nodes.image = arguments[0];
    //     nodes.caption = arguments[1];               
    //     }
    //     timer = setInterval(displayNextImage, 2000);
    //     return this;
    // },