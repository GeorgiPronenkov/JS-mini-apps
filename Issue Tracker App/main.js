document.getElementById('issueInputForm')
        .addEventListener('submit', saveIssue);

//implement saveIsssue
function saveIssue(e) {
    const issueDesc = document.getElementById('issueDescInput').value;
    const issueSeverity = document.getElementById('issueSeverityInput').value;
    const issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    const issueId = chance.guid();
    const issueStatus = 'Open';

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
        localStorage.setItem('isssues', JSON.stringify(issues));
    } else {
        const issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    //reset input elements
    document.getElementById('issueInputForm')
            .reset();

    fetchIssues();

    e.preventDefault();
}

//close status issue
function setStatusClosed(id) {
    const issues = JSON.parse(localStorage.getItem('issues'));
    for (let i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues[i].status = 'Closed';
        }
    }

    localStorage.setItem('issues', JSON.stringify(issues)); //convert array to JSON format
    fetchIssues(); //update the list output
}

//delete issue
function deleteIssue(id) {
    const issues = JSON.parse(localStorage.getItem('issues')); //retrieve from local storage
    for (let i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues.splice(i, 1);
        }
    }

    localStorage.setItem('issues', JSON.stringify(issues)); //convert array to JSON format
    fetchIssues();
}

//fetch the list of issues from local storage
function fetchIssues() {
    const issues = JSON.parse(localStorage.getItem('issues'));
    const issuesList = document.getElementById('issuesList');

    //initialize the content
    issuesList.innerHTML = '';
    //loop over issue items in issues object
    for (let i = 0; i < issues.length; i++) {
        const id = issues[i].id;
        const description = issues[i].description;
        const severity = issues[i].severity;
        const assignedTo = issues[i].assignedTo;
        const status = issues[i].status;

        //generate html output
          issuesList.innerHTML += 
                            '<div class="well">'+ 
                                '<h6>Issue ID: ' + id + '</h6>'+ 
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + description + '</h3>' +
                                '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>'+
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>'+
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+ 
                                '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                            '</div>';

        const issueDesc = document.getElementById('issueDescInput').value; 
    }
}

      
    
