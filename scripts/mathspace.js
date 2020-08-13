// Rendering mathspace as flying equations through 3D space in CSS

var equation_set = [];

//Gauss's Law (Maxell Equation)
equation_set.push(String.raw`\iint _{\partial \Omega } \mathbf {E} \cdot \mathrm {d} \mathbf {S} ={\frac {1}{\varepsilon _{0}}}\iiint _{\Omega }\rho \,\mathrm {d} V`);
//Gauss's Law For Magnetism (Maxell Equation)
equation_set.push(String.raw`\iint _{\partial \Omega } \mathbf {B} \cdot \mathrm {d} \mathbf {S} =0`);
//Faraday's Law (Maxell Equation)
equation_set.push(String.raw`\oint _{\partial \Sigma } \mathbf{E} \cdot \mathrm {d} \mathbf {l} =-{\frac {\mathrm {d} }{\mathrm {d} t}}\iint _{\Sigma }\mathbf {B} \cdot \mathrm {d} \mathbf {S}`);
//Ampere's Law (Maxell Equation)
equation_set.push(String.raw`{\begin{aligned}\oint _{\partial \Sigma }&\mathbf {B} \cdot \mathrm {d} {\mathbf {l}}=\mu _{0}\left(\iint _{\Sigma }\mathbf {J} \cdot \mathrm {d} \mathbf {S} +\varepsilon _{0}{\frac {\mathrm {d} }{\mathrm {d} t}}\iint _{\Sigma }\mathbf {E} \cdot \mathrm {d} \mathbf {S} \right)\\\end{aligned}}`);

// Navier-Stokes Equation
equation_set.push(String.raw`\rho {\frac {D\mathbf {u} }{Dt}}=\rho \left({\frac {\partial \mathbf {u} }{\partial t}}+\mathbf {u} \cdot \nabla \mathbf {u} \right)=-\nabla {\bar {p}}+\mu \,\nabla ^{2}\mathbf {u} +{\tfrac {1}{3}}\mu \,\nabla (\nabla \cdot \mathbf {u} )+\rho \mathbf {g}`);
// Schrodinger Equation
equation_set.push(String.raw`i\hbar {\frac {d}{dt}}\vert \Psi (t)\rangle ={\hat {H}}\vert \Psi (t)\rangle`);
// Einstein Field Equations
equation_set.push(String.raw`G_{\mu \nu }+\Lambda g_{\mu \nu }={\frac {8\pi G}{c^{4}}}T_{\mu \nu }`);
// Euler Lagrange Equation
equation_set.push(String.raw`L_{x}(t,q(t),{\dot {q}}(t))-{\frac {\mathrm {d} }{\mathrm {d} t}}L_{v}(t,q(t),{\dot {q}}(t))=0`);
// Rendering Equation
equation_set.push(String.raw`L_{\text{o}}(\mathbf {x} ,\omega _{\text{o}},\lambda ,t)=L_{\text{e}}(\mathbf {x} ,\omega _{\text{o}},\lambda ,t)\ +\int _{\Omega }f_{\text{r}}(\mathbf {x} ,\omega _{\text{i}},\omega _{\text{o}},\lambda ,t)L_{\text{i}}(\mathbf {x} ,\omega _{\text{i}},\lambda ,t)(\omega _{\text{i}}\cdot \mathbf {n} )\operatorname {d} \omega _{\text{i}}`);

window.addEventListener("load", main, false);

async function main(){
	var animation_div = document.querySelector('#anim');
	for(var i=0; i < 40; i++){
		var initial_x = Math.round(100*Math.random()-50).toString();
		var initial_y = Math.round(100*Math.random()-50).toString();
		var initial_z = Math.round(10*Math.random()+5).toString();
	
		var equation_div = document.createElement('div');
		equation_div.setAttribute('id','eq');
		equation_div.setAttribute('style',"top:"+initial_x+"%; left:"+initial_y+"%; animation-delay:"+initial_z+"s;");
		var selected_equation = equation_set[Math.floor(Math.random()*equation_set.length)];
		equation_div.innerHTML = '$$' + selected_equation + '$$';
		animation_div.appendChild(equation_div);
	}
	MathJax.typeset();
}
