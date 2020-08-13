# mathspace-css
An HTML+CSS+JS+SVG project to depict mathspace as a rendering of formulae on flying planes in 3D.  

See the project in action [here](https://jcarr.ca/mathspace-css).  

## Techniques

### CSS Animations
- https://www.w3schools.com/css/css3_animations.asp  
https://developer.mozilla.org/en-US/docs/Web/CSS/animation  
CSS allows for animations to be defined on elements which run rather smoothly.  
Keyframes are defined with CSS stylings, which are then interpolated in frames between the keyframes.  

### CSS perspective
https://www.w3schools.com/cssref/css3_pr_perspective.asp  
https://developer.mozilla.org/en-US/docs/Web/CSS/perspective  
https://css-tricks.com/almanac/properties/p/perspective/  
CSS allows for 3D transformations to be applied to elements before they are projected with perspective to 2D.  
A focal length is defined, which is also the distance from the z-plane. Positive z-values go towards the screen.  

### MathJax equation rendering
https://www.mathjax.org/  
https://en.wikipedia.org/wiki/MathJax  
MathJax is a library which will render LaTex (and other math expression encodings) into browser renderable formats (such as MathML or SVG).  

## Equations Rendered

### Gauss's Law (Maxwell Equation)
https://en.wikipedia.org/wiki/Gauss%27s_law  
![\iint _{\partial \Omega } \mathbf {E} \cdot \mathrm {d} \mathbf {S} ={\frac {1}{\varepsilon _{0}}}\iiint _{\Omega }\rho \,\mathrm {d} V](https://render.githubusercontent.com/render/math?math=%5Ciint%20_%7B%5Cpartial%20%5COmega%20%7D%20%5Cmathbf%20%7BE%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%5Cmathbf%20%7BS%7D%20%3D%7B%5Cfrac%20%7B1%7D%7B%5Cvarepsilon%20_%7B0%7D%7D%7D%5Ciiint%20_%7B%5COmega%20%7D%5Crho%20%5C%2C%5Cmathrm%20%7Bd%7D%20V)  
The total electric field flux through a closed surface is proportional to the total electric charge enclosed by surface.  

### Gauss's Law For Magnetism (Maxwell Equation)
https://en.wikipedia.org/wiki/Gauss%27s_law_for_magnetism  
![\iint _{\partial \Omega } \mathbf {B} \cdot \mathrm {d} \mathbf {S} =0](https://render.githubusercontent.com/render/math?math=%5Ciint%20_%7B%5Cpartial%20%5COmega%20%7D%20%5Cmathbf%20%7BB%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%5Cmathbf%20%7BS%7D%20%3D0)  
The total magnetic field flux through a closed surface is zero.  

### Faraday's Law (Maxwell Equation)
https://en.wikipedia.org/wiki/Faraday%27s_law_of_induction  
![\oint _{\partial \Sigma } \mathbf{E} \cdot \mathrm {d} \mathbf {l} =-{\frac {\mathrm {d} }{\mathrm {d} t}}\iint _{\Sigma }\mathbf {B} \cdot \mathrm {d} \mathbf {S}](https://render.githubusercontent.com/render/math?math=%5Coint%20_%7B%5Cpartial%20%5CSigma%20%7D%20%5Cmathbf%7BE%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%5Cmathbf%20%7Bl%7D%20%3D-%7B%5Cfrac%20%7B%5Cmathrm%20%7Bd%7D%20%7D%7B%5Cmathrm%20%7Bd%7D%20t%7D%7D%5Ciint%20_%7B%5CSigma%20%7D%5Cmathbf%20%7BB%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%5Cmathbf%20%7BS%7D)  
The total electric field about a closed loop is proportional to the time rate of change of the magnetic field passing through the closed loop.  

### Ampere's Law (Maxwell Equation)
https://en.wikipedia.org/wiki/Amp%C3%A8re%27s_circuital_law  
![{\begin{aligned}\oint _{\partial \Sigma }&\mathbf {B} \cdot \mathrm {d} {\mathbf {l}}=\mu _{0}\left(\iint _{\Sigma }\mathbf {J} \cdot \mathrm {d} \mathbf {S} +\varepsilon _{0}{\frac {\mathrm {d} }{\mathrm {d} t}}\iint _{\Sigma }\mathbf {E} \cdot \mathrm {d} \mathbf {S} \right)\\\end{aligned}}](https://render.githubusercontent.com/render/math?math=%7B%5Cbegin%7Baligned%7D%5Coint%20_%7B%5Cpartial%20%5CSigma%20%7D%26%5Cmathbf%20%7BB%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%7B%5Cmathbf%20%7Bl%7D%7D%3D%5Cmu%20_%7B0%7D%5Cleft(%5Ciint%20_%7B%5CSigma%20%7D%5Cmathbf%20%7BJ%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%5Cmathbf%20%7BS%7D%20%2B%5Cvarepsilon%20_%7B0%7D%7B%5Cfrac%20%7B%5Cmathrm%20%7Bd%7D%20%7D%7B%5Cmathrm%20%7Bd%7D%20t%7D%7D%5Ciint%20_%7B%5CSigma%20%7D%5Cmathbf%20%7BE%7D%20%5Ccdot%20%5Cmathrm%20%7Bd%7D%20%5Cmathbf%20%7BS%7D%20%5Cright)%5C%5C%5Cend%7Baligned%7D%7D)  
The total magnetic field about a closed loop is proportional to the current plus the time rate of chrange of the electric field passing through the closed loop.  

### Navier-Stokes Equation
https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_equations  
![\rho {\frac {D\mathbf {u} }{Dt}}=\rho \left({\frac {\partial \mathbf {u} }{\partial t}}+\mathbf {u} \cdot \nabla \mathbf {u} \right)=-\nabla {\bar {p}}+\mu \,\nabla ^{2}\mathbf {u} +{\tfrac {1}{3}}\mu \,\nabla (\nabla \cdot \mathbf {u} )+\rho \mathbf {g}](https://render.githubusercontent.com/render/math?math=%5Crho%20%7B%5Cfrac%20%7BD%5Cmathbf%20%7Bu%7D%20%7D%7BDt%7D%7D%3D%5Crho%20%5Cleft(%7B%5Cfrac%20%7B%5Cpartial%20%5Cmathbf%20%7Bu%7D%20%7D%7B%5Cpartial%20t%7D%7D%2B%5Cmathbf%20%7Bu%7D%20%5Ccdot%20%5Cnabla%20%5Cmathbf%20%7Bu%7D%20%5Cright)%3D-%5Cnabla%20%7B%5Cbar%20%7Bp%7D%7D%2B%5Cmu%20%5C%2C%5Cnabla%20%5E%7B2%7D%5Cmathbf%20%7Bu%7D%20%2B%7B%5Ctfrac%20%7B1%7D%7B3%7D%7D%5Cmu%20%5C%2C%5Cnabla%20(%5Cnabla%20%5Ccdot%20%5Cmathbf%20%7Bu%7D%20)%2B%5Crho%20%5Cmathbf%20%7Bg%7D)  
The change in momentum of a fluid parcel is equal to the pressure gradient plus the convective viscous force and gravitational body force.  

### Schrodinger Equation
https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation  
![i\hbar {\frac {d}{dt}}\vert \Psi (t)\rangle ={\hat {H}}\vert \Psi (t)\rangle](https://render.githubusercontent.com/render/math?math=i%5Chbar%20%7B%5Cfrac%20%7Bd%7D%7Bdt%7D%7D%5Cvert%20%5CPsi%20(t)%5Crangle%20%3D%7B%5Chat%20%7BH%7D%7D%5Cvert%20%5CPsi%20(t)%5Crangle)  
The time evolution of a quantum state's wave function is proprtional to the kinetic energy operator plus the potential energy operator applied to the wave function.  

### Einstein Field Equations
https://en.wikipedia.org/wiki/Einstein_field_equations  
![G_{\mu \nu }+\Lambda g_{\mu \nu }={\frac {8\pi G}{c^{4}}}T_{\mu \nu }](https://render.githubusercontent.com/render/math?math=G_%7B%5Cmu%20%5Cnu%20%7D%2B%5CLambda%20g_%7B%5Cmu%20%5Cnu%20%7D%3D%7B%5Cfrac%20%7B8%5Cpi%20G%7D%7Bc%5E%7B4%7D%7D%7DT_%7B%5Cmu%20%5Cnu%20%7D)  
The curvature of spacetime and its expansion are proportional to the energy density.  

### Euler-Lagrange Equation
https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation  
![L_{x}( t,q(t),{\dot {q}}(t) )-{\frac {\mathrm {d} }{\mathrm {d} t}}L_{v}( t,q(t),{\dot {q}}(t) )=0](https://render.githubusercontent.com/render/math?math=L_%7Bx%7D%28t%2Cq%28t%29%2C%7B%5Cdot%20%7Bq%7D%7D%28t%29%29-%7B%5Cfrac%20%7B%5Cmathrm%20%7Bd%7D%20%7D%7B%5Cmathrm%20%7Bd%7D%20t%7D%7DL_%7Bv%7D%28t%2Cq%28t%29%2C%7B%5Cdot%20%7Bq%7D%7D%28t%29%29%3D0)  
The stationary solutions of a functional equation can be solved by a differential equation.  

### Rendering Equation
https://en.wikipedia.org/wiki/Rendering_equation  
![L_{\text{o}}(\mathbf {x} ,\omega _{\text{o}},\lambda ,t)=L_{\text{e}}(\mathbf {x} ,\omega _{\text{o}},\lambda ,t)\ +\int _{\Omega }f_{\text{r}}(\mathbf {x} ,\omega _{\text{i}},\omega _{\text{o}},\lambda ,t)L_{\text{i}}(\mathbf {x} ,\omega _{\text{i}},\lambda ,t)(\omega _{\text{i}}\cdot \mathbf {n} )\operatorname {d} \omega _{\text{i}}](https://render.githubusercontent.com/render/math?math=L_%7B%5Ctext%7Bo%7D%7D(%5Cmathbf%20%7Bx%7D%20%2C%5Comega%20_%7B%5Ctext%7Bo%7D%7D%2C%5Clambda%20%2Ct)%3DL_%7B%5Ctext%7Be%7D%7D(%5Cmathbf%20%7Bx%7D%20%2C%5Comega%20_%7B%5Ctext%7Bo%7D%7D%2C%5Clambda%20%2Ct)%5C%20%2B%5Cint%20_%7B%5COmega%20%7Df_%7B%5Ctext%7Br%7D%7D(%5Cmathbf%20%7Bx%7D%20%2C%5Comega%20_%7B%5Ctext%7Bi%7D%7D%2C%5Comega%20_%7B%5Ctext%7Bo%7D%7D%2C%5Clambda%20%2Ct)L_%7B%5Ctext%7Bi%7D%7D(%5Cmathbf%20%7Bx%7D%20%2C%5Comega%20_%7B%5Ctext%7Bi%7D%7D%2C%5Clambda%20%2Ct)(%5Comega%20_%7B%5Ctext%7Bi%7D%7D%5Ccdot%20%5Cmathbf%20%7Bn%7D%20)%5Coperatorname%20%7Bd%7D%20%5Comega%20_%7B%5Ctext%7Bi%7D%7D)  
The stationary solutions of a functional equation can be solved by a differential equation.  
The total light of a given wavelength, outgoing from a given point in space, in a given outward direction is equation to the light emitted from that point in space plus incoming light reflected in the given outward direction.  
