<template>
    <div class="col-span-full lg:col-span-14 lg:col-start-2 mb-12">
        <div class="stat-img__grid">
            <div class="stat-img__tile">
                <figure>
                    <picture class="ar ar--4-3 md:ar--1-1">
                        <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGxpdmluZyUyMHJvb218ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" aria-hidden="true" />
                    </picture>
                </figure>
                <div class="stat-img__border">
                    <div class="stat-img__content">
                        <div class="stat">
                            <span class="head-3">#10</span> 
                            <span class="head-6">ranking according to Real Trends</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="stat-img__tile">
                <figure>
                    <picture class="ar ar--4-3 md:ar--1-1">
                        <img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVkcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" aria-hidden="true" />
                    </picture>
                </figure>
                <div class="stat-img__border">
                    <div class="stat-img__content">
                        <div class="stat">
                            <span class="head-3" aria-label="50 billion dollars">$50B</span> 
                            <span class="head-6">total home sales</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stat-img__tile">
                <figure>
                    <picture class="ar ar--4-3 md:ar--1-1">
                        <img src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YmVkcm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" aria-hidden="true" />
                    </picture>
                </figure>
                <div class="stat-img__border">
                    <div class="stat-img__content">
                        <div class="stat">
                            <span class="head-3">25%</span> 
                            <span class="head-6">of our listings sold&nbsp;in-house</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dlp-stat-grid'
}
</script>
<style lang="scss" scoped>

.stat {
	span {
        @apply block;
    }
}

.stat-img__grid {
  @apply grid;
  gap: 32px;
    
  @media (min-width: theme('screens.md')) {  
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
    
  @media (min-width: theme('screens.lg')) {  
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.stat-img__tile {
  grid-column: 1 / -1;
  position: relative;
  // display: block;
    
  @media (min-width: theme('screens.md')) {  
    grid-column: span 6 / span 6;
  
    &:last-child {
      grid-column-start: 4;
    }
  }
    
  @media (min-width: theme('screens.lg')) {  
    grid-column: span 1 / span 1;
  
    &:last-child {
      grid-column-start: 3;
    }
  }
}
.stat-img__border {
  border: 1px solid theme('colors.white');
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  
  margin: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  padding: 27px;
    
  @media (min-width: theme('screens.md')) {  
    padding: 40px;
  }
    
  @media (min-width: theme('screens.lg')) {  
    margin: 12px;
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    padding: 36px;
  }
}
.stat-img__content {
  background-color: rgba(255, 255, 255, 0.9);
  display: grid;
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  
  span:first-child { 
    color: theme('colors.primary.900');
  }
}
</style>