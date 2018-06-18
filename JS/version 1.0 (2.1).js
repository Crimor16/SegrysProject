				'use strict'
				let login = document.getElementById('text-1');
				let password = document.getElementById('text-2');
				let password2 = document.getElementById('text-3');
				let button = document.getElementById('button');
				alert("Внимание!\nЕсли вы при уже имеющимся аккаунте создадите новый, то старый аккаунт полностью удалится и заменится на этот.");
				button.addEventListener('click', function(){
					let a = document.getElementById('text-1').value;
					let a1 = document.getElementById('text-2').value;
					let a2 = document.getElementById('text-3').value;
					if(login.checkValidity()&password.checkValidity()&password2.checkValidity()){
						if(a[0]!=" "&a1[0]!=" "&a2[0]!=" "){
							if(a1 === a2){
								localStorage.setItem('login3965', a);
								localStorage.setItem('password3965', a1);

								localStorage.removeItem('date');
								localStorage.removeItem('select');
								localStorage.removeItem('text');
								localStorage.removeItem('pre-last');
								localStorage.removeItem('today');
								localStorage.removeItem('last');
									
								location.href = '../HTML/version 1.0 (3).html';
							}
							else
							{
								alert("Пароли не совпадают.")
							};
						}
						else
						{
							alert("В строках 1 элемент не должен быть пробелом.")
						}
					}
					else
					{
						alert("Не все обязательные поля были заполнены.")
					};
				});
