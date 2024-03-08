function signin(){
    const playerName = document.querySelector('#name');
    localStorage.setItem('userName', playerName.value);
    window.location.href = 'game.html';
}