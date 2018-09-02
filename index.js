exports.decorateConfig = config => Object.assign({}, config, {
  foregroundColor: '#ebdbb2',
  backgroundColor: '#262626',
  selectionColor: 'rgba(254, 128, 25, 0.3)',
  cursorColor: '#d65d0e',
  colors: {
    black: '#262626',
    red: '#cc241d',
    green: '#98971a',
    yellow: '#d79921',
    blue: '#458588',
    magenta: '#b16286',
    cyan: '#689d6a',
    white: '#a89984',
    lightBlack: '#928374',
    lightRed: '#fb4934',
    lightGreen: '#b8bb26',
    lightYellow: '#fabd2f',
    lightBlue: '#83a598',
    lightMagenta: '#d3869b',
    lightCyan: '#8ec07c',
    lightWhite: '#ebdbb2'
  },
  css: `
    ${config.css || ''}
    
    .tab_tab,
		.term_term {
			opacity: 0.4;
		}
		
		.tab_tab.tab_active,
		.term_active .term_term {
			opacity: 1;
		}
  `
})

