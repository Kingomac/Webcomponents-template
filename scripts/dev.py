import sys
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from build import build


class Handler(FileSystemEventHandler):
    @staticmethod
    def on_any_event(event):
        if event.event_type == 'created' or event.event_type == 'modified' or event.event_type == 'deleted':
            build()
            print('Watching for new changes')


event_handler = Handler()
observer = Observer()
observer.schedule(event_handler, './src', recursive=True)
observer.start()

try:
    while True:
        time.sleep(3)
except KeyboardInterrupt:
    observer.stop()
