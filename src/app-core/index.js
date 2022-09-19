const Core = function() {
  let moduleData = {}
  return {
    register: function(moduleId, creator) {
      moduleData[moduleId] = {
        creator,
        instance: null
      }
    },
    start: function(moduleId) {
      moduleData[moduleId].instance = moduleData[moduleId].creator(new Sandbox(this))
      moduleData[moduleId].instance.init()
    },
    stop: function(moduleId) {
      const data = moduleData[moduleId]
      if(data.instance) {
        data.instance.destroy()
        data.instance = null
      }
    },
    startAll: function() {
      for(let moduleId in moduleData) {
        if(moduleData.hasOwnProperty(moduleId)) {
          this.start(moduleId)
        }
      }
    },
    stopAll: function() {
      for(let moduleId in moduleData) {
        if(moduleData.hasOwnProperty(moduleId)) {
          this.stop(moduleId)
        }
      }
    }
  }
}

export const core = Core()