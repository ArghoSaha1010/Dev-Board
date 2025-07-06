
    function updateDate() {
      const now = new Date();

      const day = now.getDate();
      const monthIndex = now.getMonth(); // 0-11
      const year = now.getFullYear();

      const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const formattedDate = `${shortMonths[monthIndex]} ${day < 10 ? "0" + day : day} ${year}`;
      document.getElementById("date").innerText = formattedDate;
    }

    // Run once
    updateDate();

    // Optional: update every minute in case tab stays open long
    setInterval(updateDate, 60000);

    function updateWeekday() {
        const now = new Date();
        const dayIndex = now.getDay();  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  
        const shortWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
        document.getElementById("weekday").innerText = shortWeekdays[dayIndex];
      }
  
      updateWeekday();
