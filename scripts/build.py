import os


def build():
    os.system('npx webpack')
    print('\033[94m Webpack bundle built')

    temps = ['components', 'views']
    for t in temps:
        for comp in os.listdir(f'./src/{t}'):
            if('.' not in comp):
                # Minify HTML Template
                html_template_file = open(
                    f'./src/{t}/{comp}/template.html', 'r')
                html_template = html_template_file.read()
                html_template_file.close()
                html_template = html_template.replace(' />', '/>')
                html_template = html_template.replace(' >', '>')
                html_template = ''.join(html_template.split('\n'))
                output_file = open(f'./public/templates/{comp}.html', 'w')
                output_file.write(html_template)
                output_file.close()
                print(f'\033[94m {comp} HTML built')
                # Minify CSS
                css_file = open(f'./src/{t}/{comp}/style.css', 'r')
                css_template = css_file.read()
                css_file.close()
                css_template = ''.join(css_template.split('\n'))
                css_template = css_template.replace(' ', '')
                output_file = open('./public/styles/' + comp + '.css', 'w')
                output_file.write(css_template)
                output_file.close()
                print(f'\033[94m {comp} CSS built')
                print(f'**** {t} built ****')
    print('\033[4m ··········· Project built ············')


build()
