document.getElementById('issueInputForm')
        .addEventListener('submit', saveIssue);

function saveIssue(e) {
    const issueDesc = document.getElementById('issueDescInput').value;  
    const issueSeverity = document.getElementById('issueSeverityInput').value;
    const issueAssignedTo = document.getElementById('issueAssignedToInput');
    const issueId = chance.guid();
    const issueStatus = 'Open';
    
    //issue object
    const issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status: issueStatus
    }

    if (localStorage.getItem('issues') == null) {
        const issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        const issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues(); //call because the are new element
    
    e.preventDefault();
}

function fetchIssues() {
    const issues = JSON.parse(localStorage.getItem(íssues));
    const issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (let index = 0; index < issues.length; index++) {
        const id = issues[index].id;
        const desc = issues[index].description;
        const severity = issues[index].severity;
        const assignedTo = issues[index].assignedTo;
        const status = issues[index].status;

        issuesList.innerHTML += '<div class="well">' + 
                                '<h6>Issue ID: ' + id + '</h6>' + 
                                '<p><span class="label label-info">' + status + '</span></p>' +
                                '<h3>' + desc + '</h3>' +
                                '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' +
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' +
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' + 
                                '<a href="#" onclick="deleteIsssue(\''+id+'\')" class="btn btn-danger">Delete</a>' +
                                '</div>';
        
    }
}