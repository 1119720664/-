var template=`
    {{#navList}}
    {{#isActive}}
        <li class="nav-item active">
     {{/isActive}}
     {{^isActive}}
        <li class="nav-item">
      {{/isActive}}
          <a class="link" href="{{href}}">{{desc}}</a>
    </li>
    {{/navList}}
`;

  module.exports = template;