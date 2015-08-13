/**
 * Created by pmikolajczyk on 8/13/15.
 */
Shaders = {};

Shaders.getBlackShader = function(){ //original JSCAD black shader
    return new GL.Shader('\
    void main() {\
      gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;\
    }', '\
    void main() {\
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);\
    }'
    );
};

Shaders.getDiffuseSpecularShader = function(){ //original JSCAD diffuse shader
    return new GL.Shader('\
      varying vec3 color;\
      varying float alpha;\
      varying vec3 normal;\
      varying vec3 light;\
      void main() {\
        const vec3 lightDir = vec3(1.0, 2.0, 3.0) / 3.741657386773941;\
        light = lightDir;\
        color = gl_Color.rgb;\
        alpha = gl_Color.a;\
        normal = gl_NormalMatrix * gl_Normal;\
        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;\
      }',
        '\
         varying vec3 color;\
         varying float alpha;\
         varying vec3 normal;\
         varying vec3 light;\
         void main() {\
           vec3 n = normalize(normal);\
           float diffuse = max(0.0, dot(light, n));\
           float specular = pow(max(0.0, -reflect(light, n).z), 10.0) * sqrt(diffuse);\
           gl_FragColor = vec4(mix(color * (0.3 + 0.7 * diffuse), vec3(1.0), specular), alpha);\
         }'
    );
};

Shaders.getDepthShader = function(){ //see http://evanw.github.io/lightgl.js/tests/shadowmap.html
  return new GL.Shader('\
     varying vec4 pos;\
     void main() {\
        gl_Position = pos = gl_ModelViewProjectionMatrix * gl_Vertex;\
     }\
     ', '\
     varying vec4 pos;\
     void main() {\
        float depth =  pos.z / pos.w;\
        float depthC = depth * 0.5 + 0.5;\
        gl_FragColor = vec4(depthC,depthC,depthC,1.0);\
     }\
 ');
};

Shaders.getDepthShaderShallow = function(){ //see http://evanw.github.io/lightgl.js/tests/shadowmap.html
    return new GL.Shader('\
     varying vec4 pos;\
     void main() {\
        gl_Position = pos = gl_ModelViewProjectionMatrix * gl_Vertex;\
     }\
     ', '\
     varying vec4 pos;\
     void main() {\
        float depth =  pow(pos.z / pos.w , 30.0);\
        float depthC = depth * 0.5 + 0.5;\
        gl_FragColor = vec4(depthC,depthC,depthC,1.0);\
     }\
 ');
};

/*
 var colorShader =

 */