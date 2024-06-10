window.onload = function() {
    let count = 10;
    const countdownElement = document.getElementById("countdown");

    if (countdownElement) {
        countdownElement.textContent = count;

        setTimeout(function() {
            countdownElement.textContent = count - 1;

            setTimeout(function() {
                countdownElement.textContent = count - 2;

                setTimeout(function() {
                    countdownElement.textContent = count - 3;

                    setTimeout(function() {
                        countdownElement.textContent = count - 4;

                        setTimeout(function() {
                            countdownElement.textContent = count - 5;

                            setTimeout(function() {
                                countdownElement.textContent = count - 6;

                                setTimeout(function() {
                                    countdownElement.textContent = count - 7;

                                    setTimeout(function() {
                                        countdownElement.textContent = count - 8;

                                        setTimeout(function() {
                                            countdownElement.textContent = count - 9;

                                            setTimeout(function() {
                                                countdownElement.textContent = "Happy Independence Day";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
};
