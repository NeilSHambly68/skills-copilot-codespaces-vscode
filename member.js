function skillsMember() {
    var member = document.getElementById('member').value;
    var member = member.toLowerCase();
    var member = member.replace(/\s/g, '');

    if (member == 'michael') {
        window.location.href = '/michael.html';
    } else if (member == 'jessica') {
        window.location.href = '/jessica.html';
    } else if (member == 'matt') {
        window.location.href = '/matt.html';
    } else {
        alert('Sorry, we do not have a member by that name.');
    }
}