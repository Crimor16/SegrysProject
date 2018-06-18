				'use strict'
				let text1 = document.getElementById('text-1');
				let text2 = document.getElementById('text-2');
				let button = document.getElementById('button')

				button.addEventListener('click', function(){
					let a = document.getElementById('text-1').value;
					let a1 = document.getElementById('text-2').value;
					let login = localStorage.getItem('login3965');
					let password = localStorage.getItem('password3965');

					if(text1.checkValidity()&text2.checkValidity()){
						if(login!=a|a1!=password){
							alert("Был введён неверный логин или пароль.")
						}
						else{	
							location.href = '../HTML/version 1.0 (3).html';
						};
						
					}
					else
					{
						alert("Были введены не все данные.")
					};
				});
