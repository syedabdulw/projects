let presentCount = 0;
let absentCount = 0;
let leaveCount = 0;

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentId = document.getElementById('student-id').value;
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('roll-no').value;
    const classInfo = document.getElementById('class').value;
    
    const bioContainer = document.getElementById('bio-container');
    bioContainer.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Student ID:</strong> ${studentId}</p>
        <p><strong>Roll No:</strong> ${rollNo}</p>
        <p><strong>Class:</strong> ${classInfo}</p>
    `;
    
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('attendance-container').style.display = 'block';
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.getElementById('attendance-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('login-form').reset();
    document.getElementById('bio-container').innerHTML = '';
    document.getElementById('attendance-form').reset();
    presentCount = 0;
    absentCount = 0;
    leaveCount = 0;
    document.getElementById('present-count').textContent = presentCount;
    document.getElementById('absent-count').textContent = absentCount;
    document.getElementById('leave-count').textContent = leaveCount;
    document.getElementById('list').innerHTML = '';
});

document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;

    const listItem = document.createElement('li');
    listItem.className = 'attendance-item';
    listItem.innerHTML = `
        <span>${name}</span> - <span class="${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
    `;

    document.getElementById('list').appendChild(listItem);

    if (status === 'present') {
        presentCount++;
        document.getElementById('present-count').textContent = presentCount;
    } else if (status === 'absent') {
        absentCount++;
        document.getElementById('absent-count').textContent = absentCount;
    } else if (status === 'leave') {
        leaveCount++;
        document.getElementById('leave-count').textContent = leaveCount;
    }
    
    document.getElementById('attendance-form').reset();
});
