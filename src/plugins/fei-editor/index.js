import FeiEditor from 'fei-editor'
import 'brace/ext/emmet'
import 'brace/ext/language_tools'
import 'brace/mode/json'
import 'brace/snippets/json'
import 'brace/mode/typescript'
import 'brace/snippets/typescript'
import 'brace/mode/javascript'
import 'brace/snippets/javascript'
import 'brace/mode/stylus'
import 'brace/snippets/stylus'
import 'brace/theme/chrome'
import 'brace/theme/sqlserver'

export function registerEditor(app) {
  app.component('FAceEditor', FeiEditor)
}
