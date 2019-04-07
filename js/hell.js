var post_1 = `<p>Указатели представляют собой объекты, значением которых служат адреса других объектов (переменных, констант, указателей) или функций. Как и ссылки, указатели применяются для косвенного доступа к объекту. Однако в отличие от ссылок указатели 
обладают большими возможностями.</p>
<p>Для определения указателя надо указать тип объекта, на который указывает указатель, и символ звездочки *. Например, определим указатель на 
объект типа int:</p>
<pre class="brush:cpp;">int *p;</pre>
<p>Пока указатель не ссылается ни на какой объект. При этом в отличие от ссылки указатель необязательно инициализировать каким-либо значением. 
Теперь присвоим указателю адрес переменной:</p>
<pre class="brush:cpp;">
int x = 10;		// определяем переменную
int *p;			// определяем указатель
p = &x;			// указатель получает адрес переменной
</pre>
<p>Для получения адреса переменной применяется операция <span class="b">&amp;</span>. Что важно, переменная x имеет тип int, и указатель, 
который указывает на ее адрес, тоже имеет тип int. То есть должно быть соответствие по типу.</p>
<p>Если мы попробуем вывести адрес переменной на консоль, то увидим, что он представляет шестнадцатиричное значение:</p>
<pre class="brush:cpp;">
#include &lt;iostream&gt;

int main()
{
	int x = 10;     // определяем переменную
	int *p;         // определяем указатель
	p = &x;         // указатель получает адрес переменной
	std::cout &lt;&lt; "p = " &lt;&lt; p &lt;&lt; std::endl;
	return 0;
}
</pre>
<p>Консольный вывод программы:</p>
<div class="console">
<pre class="consoletext">
p = 0x60fe98
</pre>
</div>
<p>В каждом отдельном случае адрес может отличаться, но к примеру, в моем случае машинный адрес переменной x - 0x60fe98. То есть в памяти 
компьютера есть адрес 0x60fe98, по которому располагается переменная x. Так как переменная x представляет тип <span class="b">int</span>, 
то на большинстве архитектур она будет занимать следующие 4 байта (на конкретных архитектурах размер памяти для типа int может отличаться). Таким образом, 
переменная типа int последовательно займет ячейки памяти с адресами 0x60FE98, 0x60FE99, 0x60FE9A, 0x60FE9B.</p>
<img src="assets/posts/1/1.png" alt="Указатели в C++" />
<p>И указатель <span class="b">p</span> будет ссылаться на адрес, по которому располагается переменная x, то есть на адрес 0x60FE98.</p>
<p>Но так как указатель хранит адрес, то мы можем по этому адресу получить хранящееся там значение, то есть значение переменной x. Для этого применяется 
операция <span class="b">*</span> или операция разыменования, то есть та операция, которая применяется при определении указателя. Результатом этой 
операции всегда является объект, на который указывает указатель. Применим данную операцию и получим значение переменной x:</p>
<pre class="brush:cpp;">
#include &lt;iostream&gt;

int main()
{
	int x = 10;
	int *p;
	p = &x;
	std::cout &lt;&lt; "Address = " &lt;&lt; p &lt;&lt; std::endl;
	std::cout &lt;&lt; "Value = " &lt;&lt; *p &lt;&lt; std::endl;
	return 0;
}
</pre>
<p>Консольный вывод:</p>
<div class="console">
<pre class="consoletext">
Address = 0x60fe98
Value = 10
</pre>
</div>
<p>Значение, которое получено в результате операции разыменования, можно присвоить другой переменной:</p>
<pre class="brush:cpp;">
int x = 10;
int *p  = &x;
int y = *p;
std::cout &lt;&lt; "Value = " &lt;&lt; y &lt;&lt; std::endl;	// 10
</pre>
<p>И также используя указатель, мы можем менять значение по адресу, который хранится в указателе:</p>
<pre class="brush:c;">
int x = 10;
int *p = &x;
*p = 45;
std::cout &lt;&lt; "x = " &lt;&lt; x &lt;&lt; std::endl;	 // 45
</pre>
<p>Так как по адресу, на который указывает указатель, располагается переменная x, то соответственно ее значение изменится.</p>
<p>Создадим еще несколько указателей:</p>
<pre class="brush:cpp;">
#include &lt;iostream&gt;

int main()
{
    short c = 12;
    int d = 10;
    short s = 2;
     
    short *pc = &c;          // получаем адрес переменной с типа short
    int *pd = &d;           // получаем адрес переменной d типа int
    short *ps = &s;         // получаем адрес переменной s типа short
     
    std::cout &lt;&lt; "Variable c: address=" &lt;&lt; pc &lt;&lt; "\t value=" &lt;&lt; *pc &lt;&lt; std::endl;
    std::cout &lt;&lt; "Variable d: address=" &lt;&lt; pd &lt;&lt; "\t value=" &lt;&lt; *pd &lt;&lt; std::endl;
    std::cout &lt;&lt; "Variable s: address=" &lt;&lt; ps &lt;&lt; "\t value=" &lt;&lt; *ps &lt;&lt; std::endl;
	
return 0;
}
</pre>
<p>В моем случае я получу следующий консольный вывод:</p>
<div class="console">
<pre class="consoletext">
Variable c: address=0x60fe92	value=12
Variable d: address=0x60fe8c	value=10
Variable s: address=0x60fe8a	value=2
</pre>
</div>
<p>По адресам можно увидеть, что переменные часто расположены в памяти рядом, но не обязательно в том порядке, в котором они определены в коде программы:</p>
<img src="assets/posts/1/2.png" alt="Работа с памятью в языке C++" />
`

var post_2 = `<p>При создании массива с фиксированными размерами под него выделяется определенная память. Например, пусть у нас будет массив с пятью элементами:</p>
<pre class="brush:c;">double numbers[5] = {1.0, 2.0, 3.0, 4.0, 5.0};</pre>
<p>Для такого массива выделяется память 5 * 8 (размер типа double) = 40 байт. Таким образом, мы точно знаем, сколько в массиве элементов и сколько 
он занимает памяти. Однако это не всегда удобно. Иногда бывает необходимо, чтобы количество элементов и соответственно размер выделяемой памяти 
для массива определялись динамически в зависимости от некоторых условий. Например, пользователь сам может вводить размер массива. И в этом случае для 
создания массива мы можем использовать динамическое выделение памяти.</p>
<p>Для управления динамическим выделением памяти используется ряд функций, которые определены в заголовочном файле <span class="b">stdlib.h</span>:</p>
<ul>
<li><p><span class="b">malloc()</span>. Имеет прототип</p>
<pre class="brush:c;">void *malloc(unsigned s);</pre>
<p>Выделяет память длиной в s байт и возвращает указатель на начало выделенной памяти. В случае неудачного выполнения возвращает <span class="b">NULL</span></p>
</li>

<li><p><span class="b">calloc()</span>. Имеет прототип</p>
<pre class="brush:c;">void *calloc(unsigned n, unsigned m);</pre>
<p>Выделяет память для n элементов по m байт каждый и возвращает указатель на начало выделенной памяти. В случае неудачного выполнения возвращает <span class="b">NULL</span></p>
</li>

<li><p><span class="b">realloc()</span>. Имеет прототип</p>
<pre class="brush:c;">void *realloc(void *bl, unsigned ns);</pre>
<p>Изменяет размер ранее выделенного блока памяти, на начало которого указывает указатель bl, до размера в ns байт. 
Если указатель bl имеет значение <span class="b">NULL</span>, то есть память не выделялась, то действие функции аналогично действию <span class="b">malloc</span></p>
</li>

<li><p><span class="b">free()</span>. Имеет прототип</p>
<pre class="brush:c;">void *free(void *bl);</pre>
<p>Освобождает ранее выделенный блок памяти, на начало которого указывает указатель bl.</p>
<p>Если мы не используем эту функцию, то динамическая память все равно освободится автоматически при завершении работы программы. Однако все же 
хорошей практикой является вызов функции <span class="b">free()</span>, который позволяет как можно раньше освободить память.</p>
</li>
</ul>
<p>Рассмотрим применение функций на простой задаче. Длина массива неизвестна и вводится во время выполнения программы пользователем, и также 
значения всех элементов вводятся пользователем:</p>
<pre class="brush:c;">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(void)
{	
	int *block;	// указатель для блока памяти
	int n;		// число элементов массива
	// ввод числа элементов
	printf("Size of array=");
	scanf("%d", &n);
	
	// выделяем память для массива
	// функция malloc возвращает указатель типа void*
	// который автоматически преобразуется в тип int*
	block = malloc(n * sizeof(int));
	
	// вводим числа в массив
	for(int i=0;i&lt;n; i++)
	{
		printf("block[%d]=", i);
		scanf("%d", &block[i]);
	}
	printf("\n");
	
	// вывод введенных чисел на консоль
	for(int i=0;i&lt;n; i++)
	{
		printf("%d \t", block[i]);
	}
	
	// освобождаем память
	free(block);
	return 0;
}
</pre>
<p>Консольный вывод программы:</p>
<div class="console">
<pre class="consoletext">
Size of array=5

block[0]=23
block[1]=-4
block[2]=0
block[3]=17
block[4]=81

23	-4	0	17	81
</pre>
</div>
<p>Здесь для управления памятью для массива определен указатель block типа <span class="b">int</span>. Количество элементов массива заранее неизвестно, 
оно представлено переменной n.</p>
<p>Вначале пользователь вводит количество элементов, которое попадает в переменную n. После этого необходимо выделить память для данного количества 
элементов. Для выделения памяти здесь мы могли бы воспользоваться любой из трех вышеописанных функций: malloc, calloc, realloc. 
Но конкретно в данной ситуации воспользуемся функцией <span class="b">malloc</span>:</p>
<pre class="brush:c;">block = malloc(n * sizeof(int));</pre>
<p>Прежде всего надо отметить, что все три выше упомянутые функции для универсальности возвращаемого значения в качестве результата возвращают указатель типа 
<span class="b">void *</span>. Но в нашем случае создается массив типа int, для управления которым используется указатель типа <span class="b">int *</span>, 
поэтому выполняется неявное приведение результата функции malloc к типу <span class="b">int *</span>.</p>
<p>В саму функцию malloc передается количество байтов для выделяемого блока. Это количество подсчитать довольно просто: достаточно умножить количество элементов на размер одного элемента 
<code>n * sizeof(int)</code>.</p>
<p>После выполнения всех действий память освобождается с помощью функции <span class="b">free()</span>:</p>
<pre class="brush:c;">free(block);</pre>
<p>Важно, что после выполнения этой функции мы уже не сможем использовать массив, например, вывести его значения на консоль:</p>
<pre class="brush:c;">
free(block);
for(int i=0;i&lt;n; i++)
{
	printf("%d \t", block[i]);
}
</pre>
<p>И если мы попытаемся это сделать, то получим неопределенные значения.</p>
<p>Вместо функции malloc аналогичным образом мы могли бы использовать функцию <span class="b">calloc()</span>, которая принимает количество элементов и размер одного элемента:</p>
<pre class="brush:c;">block = calloc(n, sizeof(int));</pre>
<p>Либо также можно было бы использовать функцию <span class="b">realloc()</span>:</p>
<pre class="brush:c;">
int *block = NULL;
block = realloc (block, n * sizeof(int));
</pre>
<p>При использовании realloc желательно (в некоторых средах, например, в Visual Studio, обязательно) инициализировать указатель хотя бы значением NULL.</p>
<p>Но в целом все три вызова в данном случае имели бы аналогичное действие:</p>
<pre class="brush:c;">
block = malloc(n * sizeof(int));
block = calloc(n, sizeof(int));
block = realloc (block, n * sizeof(int));
</pre>
<p>Теперь рассмотрим более сложную задачу - динамическое выделение памяти для двухмерного массива:</p>
<pre class="brush:c;">
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main(void)
{
	int **table;	// указатель для блока памяти для массива указателей
	int *rows;		// указатель для блока памяти для хранения информации по строкам

	int rowscount;	// количество строк
	int d;		// вводимое число
	
	// ввод количества строк
	printf("Rows count=");
	scanf("%d", &rowscount);

	// выделяем память для двухмерного массива
	table = calloc(rowscount, sizeof(int*));
	rows = malloc(sizeof(int)*rowscount);
	// цикл по строкам
	for (int i = 0; i&lt;rowscount; i++)
	{
		printf("\nColumns count for row %d=", i);
		scanf("%d", &rows[i]);
		table[i] = calloc(rows[i], sizeof(int));

		for (int j = 0; j&lt;rows[i]; j++)
		{
			printf("table[%d][%d]=", i, j);
			scanf("%d", &d);
			table[i][j] = d;
		}
	}
	printf("\n");

	// вывод введенных чисел на консоль
	for (int i = 0; i&lt;rowscount; i++)
	{
		printf("\n");

		for (int j = 0; j&lt;rows[i]; j++)
		{
			printf("%d \t", table[i][j]);
		}
		// освобождение памяти для одной строки
		free(table[i]);
	}
	
	// освобождение памяти
	free(table);
	free(rows);

	return 0;
}
</pre>
<p>Переменная <code>table</code> представляет указатель на массив указателей типа <span class="b">int*</span>. Каждый указатель table[i] в этом массиве представляет указатель на подмассив элементов типа <span class="b">int</span>, то есть отдельные строки таблицы. 
А переменная <code>table</code> фактически представляет указатель на массив указателей на строки таблицы.</p>
<p>Для хранения количества элементов в каждом подмассиве определяется указатель <code>rows</code> типа <span class="b">int</span>. Фактически он хранит количество столбцов для каждой строки таблицы.</p>
<p>Сначала вводится количество строк в переменную <code>rowscount</code>. Количество строк - это количество указателей в массиве, на который указывает указатель <code>table</code>. 
И кроме того, количество строк - это количество элементов в динамическом массиве, на который указывает указатель <code>rows</code>. Поэтому вначале необходимо для всех этих массивов 
выделить память:</p>
<pre class="brush:c;">
table = calloc(rowscount, sizeof(int*));
rows = malloc(sizeof(int)*rowscount);
</pre>
<p>Далее в цикле осуществляется ввод количества столбцов для каждый строки. Введенное значение попадает в массив rows. И в соответствии с введенным значением для каждой строки выделяется необходимый размер памяти:</p>
<pre class="brush:c;">
scanf("%d", &rows[i]);
table[i] = calloc(rows[i], sizeof(int));
</pre>
<p>Затем производится ввод элементов для каждой строки.</p>
<p>В конце работы программы при выводе происходит освобождение памяти. В программе память выделяется для строк таблицы, поэтому эту память надо освободить:</p>
<pre class="brush:c;">free(table[i]);</pre>
<p>И кроме того, освобождается память, выделенная для указателей table и rows:</p>
<pre class="brush:c;">
free(table);
free(rows);
</pre>
<p>Консольный вывод программы:</p>
<div class="console">
<pre class="consoletext">
Rows count=2

Columns count for 1=3
table[0][0]=1
table[0][1]=2
table[0][2]=3

Columns count for 2=2
table[1][0]=4
table[2][1]=5

1	2	3
4	5
</pre>
</div>
`
var post_3 = `
<p>Cheat Engine– полезнейшая программа в арсенале любого геймера. 
Изменить внутренние параметры игры и «создать» себе нужное количество игрового золота, 
боеприпасов или любых других ресурсов в несколько кликов мышки, вот предназначение этой программы. 
К сожалению, у многих игроков при первом использовании возникают вопросы, как ею правильно пользоваться, 
поэтому мы написали для вас подробною инструкцию, как пользоваться Cheat Engine.<br />
<div>
	<audio src="assets/posts/3/get_lucky.mp3" controls></audio>
</div>
<div class="embed-responsive embed-responsive-16by9">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/lUY9KcFf2Ho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
`

var aboutMe = `
<style>
  a {
		text-decoration: none !important
	}
</style>
<dir class="row">
	<dir class="col-md-12">

		<div id="carousel" class="carousel slide rounded mx-auto d-block img-thumbnail aboutMeLogo" data-ride="carousel">
			<div class="carousel-inner">
			<div class="item active">
				<img src="assets/Logo.jpg" alt="...">
			</div>
			<div class="item">
				<img src="assets/myFoto1.jpg" alt="...">
			</div>
			<div class="item">
				<img src="assets/myFoto2.jpg" alt="...">
			</div>
			</div>
			<!-- Элементы управления -->
			<a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
				<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span class="sr-only">Предыдущий</span>
			</a>
			<a class="right carousel-control" href="#carousel" role="button" data-slide="next">
				<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span class="sr-only">Следующий</span>
			</a>
		</div>


		<dir>
			<a class="fab fa-github fa-3x fa-icon pulse"></a>
			<br>
			<a class="fab fa-discord fa-3x fa-icon pulse"></a>
			<br>
			<a class="fab fa-vk fa-3x fa-icon pulse"></a>
		</dir>
	</dir>
	<dir class="blog-main">
		<p>Здравствуйте, меня зовут Дамир и я являюсь <b>Junior JavaEE, C++ разработчиком.</b>
		Есть не малый интерес к reverse engineering-у и написанию, пока что, простенького Программного обеспечения.
		<br>
		Ниже представлены языки в который я что-то да знаю или хотя бы писал что-то с помощью них:</p>
		<table class="table">
			<thead>
				<th>Язык</th>
				<th>Уровень владения</th>
			</thead>
			<tbody>
			<tr class="success">
				<td>С++</td>
				<td>Крепкий средняк, по возможности развиваюсь в этом направлении.</td>
			</tr>
			<tr class="info">
				<td>C</td>
				<td>Язык с которого все началось.</td>
			</tr>
			<tr class="info">
				<td>JavaEE</td>
				<td>Из-за обстоятельств был выучен и учится по сей день для получения работы</td>
			</tr>
			<tr class="warning">
				<td>HTML+CSS+JS+JQ</td>
				<td>Чуть ниже среднего</td>
			</tr>
			<tr class="success">
				<td>ASM</td>
				<td>Понимаю основы</td>
			</tr>
			</tbody>
		</table>
	</dir>
</dir>
`

var project_1 = `
	<p>Один из моих опытов в разработке Internal читов. Имеет самый базовый функционал в виде WH+AIM+ESP+BHOP и еще пару мелких фичей</p>
	<p>Ссылка на <a href="https://github.com/damirs11/Internal_CsGo">GitHub</a></p>
`
var project_2 = `
	<p>Один из моих опытов в разработке Internal читов. Имеет самый базовый функционал в виде WH+AIM+ESP+BHOP и еще пару мелких фичей</p>
	<p>Ссылка на <a href="https://github.com/damirs11/Internal_CsGo">GitHub</a></p>
`