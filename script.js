(function(){
  var tag = {
    tag:['mary','roshan'],
    // template=$('#tag-template').html(),
    init:function(){
      this.cacheDom();
      this.bindEvents();
      this.render();
      this.addTag();
      this.deleteTag();
    },
    cacheDom:function(){
      this.$el = document.querySelector('.tags');
      this.$button = document.querySelector('.tag-add--button');
      this.$input = document.querySelector('.tag-add--input');
      this.$ul = document.querySelector('.tag-list');alert(2);
      // this.template = document.querySelector('#tag-template').html();alert(3);
    },
    bindEvents:function(){alert(4);
      // this.$button.on('click',this.addTag.bind(this));alert(5);
      // this.$ul.delegate('i.del','click',this.deleteTag.bind(this));
    },
    render:function(){alert(5);
        var data= {
          tag : this.tag,
        };
        // this.$ul.html(Mustache.render(this.template,data));alert(5);
    },
    addTag:function(){alert(6);
      // this.tag.push(this.$input.val());alert(6);
      // this.render();
      // this.input.val('');alert(6);
    },
    deleteTag:function(event){alert(7);
      // var $remove = $(event.target).closest('li');alert(7);
      // var i = this.$ul.find('li').index($remove);
      // $remove.remove();
      // this.tag.splice(i,1);
      // this.render();
    }
  };

  tag.init();

})()
